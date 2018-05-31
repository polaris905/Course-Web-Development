+ 有关链接
  + [NodeJS官网](https://nodejs.org)
  + [开发技术对比网站](https://stackshare.io/)
  + [npm官网](https://www.npmjs.com)
+ 二个问题
  + 什么是Node  
    能够使javascript运行于后端服务器
  + 为什么要学习Node  
    1.流行  
    2.基于javascript
+ Node操作
  + 在终端输入node回车，进入Node操作状态
    可以用node <filename>来执行javascript后缀文件
+ npm操作
  + npm install，安装一个package
  ```
  npm install cat-me
  ```
  + require()，include一个package
  ```js
  var cat = require("cat-me");
  console.log(cat());
  ```
  + 课上举例练习的npm package "faker"，可以虚拟生成一些交易数据，可用作模拟练习
