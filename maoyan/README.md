# 猫眼电影字体反爬

###效果图
![](https://i.imgur.com/snfYVwP.png)

#### 反爬知识点
* 基于ts生成的code，用于标识是否是合法请求

#### 运行方式
* 启动server.js服务
* 启动main程序
    * main程序会根据ts请求server服务，获得code值，然后向mytoken发起请求，并解析相关数据
    
