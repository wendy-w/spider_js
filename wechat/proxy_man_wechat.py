import sys
sys.path.append('..')
sys.path.append('../..')
sys.path.append('../../..')
import re
import redis

from wechat.settings import QUEUES

QUEUE_CONF = QUEUES['tasks']
r = redis.Redis(**QUEUE_CONF)

class WeChatProxyHandler():
    url = 'https://mp.weixin.qq.com/mp/profile_ext?action=home'
    def response(self,flow):
        if (flow.request.url.find(self.url))!=-1:
            for line in flow.response.text.split('\n'):
                line = line.strip()
                if line.find('var msgList') != -1:
                    line = eval(re.sub('&quot;', '"', line[len('var msgList = ') + 1:-2]))
                    urls = [item.get('app_msg_ext_info', {}).get('content_url') for item in line['list']]
                    urls = [re.sub('\\\/', '/', url) for url in urls if url]
                    r.lpush('wechat', *urls)


addons=[
    WeChatProxyHandler()
]