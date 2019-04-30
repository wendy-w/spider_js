from maoyan.models import Font
from maoyan.settings import FONTS
import requests
from lxml import etree
import re
import lxml.html
import os

from maoyan.utils import md5


class MaoYanSpider():
    URL = 'https://maoyan.com/board/1'
    HEADERS={
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36'
    }

    def download(self,url,**kwargs):
        headers = kwargs.pop('headers',{})
        headers.update(self.HEADERS)
        response = requests.get(url=url,headers=headers,**kwargs)
        if response.status_code==200:
            return 200,response.content
        return response.status_code,''

    def get_home(self):
        state,html = self.download(self.URL)
        if state==200:
            html = html.decode('utf-8')
            # print(html)
            xml = etree.HTML(html)
            elements = xml.xpath('//dl//dd')
            datas = []
            for element in elements:
                title = ''.join(element.xpath('.//p[@class="name"]/a/@title')).strip()
                real_price = lxml.html.tostring(element.xpath('.//p[@class="realtime"]/span/span')[0])
                # print(real_price)
                for r in re.findall(b'&#(.*?);',real_price):
                    real_price=re.sub(b'&#'+r,(b'uni'+str(hex(int(r)))[2:].encode('utf-8')).upper(),real_price)
                # real_price=re.sub(b'&#',b'uni',real_price)
                real_price=etree.HTML(real_price).xpath('//text()')[0]
                unit = element.xpath('.//p[@class="realtime"]/text()[2]')[0].strip()
                datas.append({'title':title,'real_price':real_price,'unit':unit})
            url = 'https:'+re.findall('//vfile.meituan.net/colorstone/.*?woff',html)[0]
            return (url,datas)

        else:
            raise Exception('download failed，state={}'.format(state))

    def get_remote_font(self,font_url):
        state,html = self.download(font_url)
        if state==200:
            _temp = os.path.join(os.path.dirname(FONTS['path']),'{}.woff'.format(md5(font_url)))
            with open(_temp,'wb') as fw:
                fw.write(html)
            f = Font(_temp)
            os.remove(_temp)
            return f
        else:
            raise Exception('download remote font faile:{}'.format(font_url))
    def run(self):
        default_font = Font(path=FONTS['path'],font_map=FONTS['font_map'])
        font_url,datas = self.get_home()
        print('服务器字体',font_url)
        remote_font = self.get_remote_font(font_url)
        # print(remote_font.uni_to_contour)
        for data in datas:
            title = data['title']
            real_price = data['real_price']
            for r in re.findall('UNI.*?;',real_price):
                uni =re.sub(';','',r)
                contour = remote_font.uni_to_contour.get(uni)
                font =default_font.contour_to_font.get(contour)
                real_price=re.sub(r,str(font),real_price)
            unit = data['unit']
            print('电影名:{}'.format(title),'实时票房：{}{}'.format(real_price,unit))

if __name__ == '__main__':
    MaoYanSpider().run()

