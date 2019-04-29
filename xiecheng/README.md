# 携程房价抓取
#### 2019-04-29携程新反爬规则
* fcerror的入参由hotelid+UA改成了hotelid
* 新增一个_hotelnewguid的cookie，其由hotelid的hashcode（小写hashcode）经过换算的来

![](https://i.imgur.com/CXBOwVi.jpg)

#### 2019-04-23携程新反爬规则
* cookie新增一个hoteluuid,表示当前浏览器指纹。

![](https://i.imgur.com/gQaejK7.jpg)

##### 运行方式
* 启动server.js服务
    * server.js的功能是解析eleven的值
* 运行main.py
    * 根据hotalid和cityid进行抓取
    * 并会生成xiecheng.html文件,用firefox打开，选择unicode编码，和main函数请求的地址的价格进行对比
    
### 反爬点 ###

![](https://i.imgur.com/u2n8beV.jpg)

### 效果mp4 ###
*  见项目


##### 已解决的问题
* eleven 值的自动获取
* 房价数据的字体转换
* cookie自动生成的问题
    * _zQdjfing
    * fcerror
    * hashCode重写
