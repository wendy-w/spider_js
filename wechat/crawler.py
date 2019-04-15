import redis
import time
r = redis.Redis(host='192.168.99.100',port=32768,db=10)
import requests
from lxml import etree
while True:
    url = r.lpop('wechat')
    if url:
        url = url.decode('utf-8')
        response = requests.get(url)
        xml = etree.HTML(response.text)
        title = ''.join(xml.xpath('//h2//text()')).strip()
        author = ''.join(xml.xpath('//span[@id="profileBt"]/a/text()')).strip()
        publish_time = ''.join(xml.xpath('//em[@id="publish_time"]//text()')).strip()
        print(title,author,'  ',publish_time,'  ',url)
    else:
        time.sleep(1)
