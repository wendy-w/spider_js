import asyncio
import aiohttp
import time
import json
code_url = 'http://127.0.0.1:3000/get_code'


async def download(session, url, **kwargs):
    response = await session.get(url, **kwargs)
    return await response.content.read()


async def main():
    async with aiohttp.ClientSession() as session:
        ts = int(time.time() * 1000)
        code = await download(session, code_url, params={'ts': ts})
        assert isinstance(code, bytes)
        code = code.decode('utf-8')
        params = {'subject': 'hot_search',
                  'timestamp': ts,
                  'code': code,
                  'platform': 'web_pc'}
        content = await download(session,'https://speed-api.mytokenapi.com/ticker/currencylist',params=params)
        items = json.loads(content.decode('utf-8'))['data']['list']
        for item in items:
            symbol = item['symbol']
            percent_change_utc0 = item['percent_change_utc0']
            market_cap_display = item['market_cap_display']
            search_cnt = item['search_cnt']
            half_fire_cnt = item['half_fire_cnt']
            print('币种:{} 搜索量:{} 热度:{} 涨跌幅:{} 市值:{}'.format(symbol,search_cnt,half_fire_cnt,percent_change_utc0,market_cap_display))


asyncio.run(main())
