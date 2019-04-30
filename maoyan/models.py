import os
from fontTools.ttLib import TTFont
from maoyan.utils import md5
import lxml.html
import lxml.etree
import json
class Font():
    def __init__(self,path,font_map=None,):
        self.path = path
        self.font_map = font_map
        self.contour_to_font=dict()
        self.uni_to_contour=dict()
        self.__init()


    def __init(self):
        assert os.path.exists(self.path)
        font_xml = self.load_default_font()
        self.parser_map(font_xml)
        if self.font_map:
            self.parser_contour(font_xml)

    def load_default_font(self):
        tt = TTFont(self.path)
        _temp=os.path.join(os.path.dirname(self.path),'{}.xml'.format(md5(self.path)))
        tt.saveXML(_temp)
        font_xml = lxml.etree.parse(_temp)
        # os.remove(_temp)
        return font_xml

    def parser_contour(self, font_xml):
        for k, v in self.font_map.items():
            try:
                element = font_xml.xpath('//TTGlyph[@name="{}"]'.format(k))[0]
                contours=[lxml.html.tostring(e).decode('utf-8').strip() for e in element.xpath('./contour/pt')]
                self.contour_to_font[md5(json.dumps(contours))]=v
            except Exception:
                raise Exception('{}字体改版，请重新更新settings中的配置,key:{},val:{}'.format(self.path,k,v))

    def parser_map(self, font_xml):
        for element in font_xml.xpath('//TTGlyph'):
            try:
                name = ''.join(element.xpath('@name')[0])
                contours = [lxml.html.tostring(e).decode('utf-8').strip() for e in element.xpath('./contour/pt')]
                self.uni_to_contour[name.upper()] = md5(json.dumps(contours))
            except Exception as e:
                raise Exception('{}字体改版，请重新更新settings中的配置,error:{}'.format(self.path, e))


if __name__ == '__main__':
    from maoyan.settings import FONTS
    Font(FONTS['path'],FONTS['font_map'])
