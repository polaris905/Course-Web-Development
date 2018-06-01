+ 有关链接
  + [可以查找很多技术问答的网站](https://stackoverflow.com/search?q=framework+library)  
  + [express官网](http://www.expressjs.com)
  + Postman：网页调试工具
+ package.json
  + npm init 生成一个新的package.json
  + npm install XXX --save save参数是将安装的这个package名字和版本号
+ 新建一个app.js
```js
var express = require("express");
var app = express();

// 第一个参数代表在服务器的路径名，这几段语句是有顺序的，加入*参数的语句在第一个，那么后面的语句就没有效果了
app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("dog", function(req, res) {
    res.send("MiMi is here!");
});

// *代表所有路径名
app.get("*", function(req, res) {
    res.send("You are a star!!!");
});

// 所有符合参数里面patten的路径，都响应这条语句
app.get("/r/:subredditName", function(req, res) {
    // req.parms为匹配上面:参数部分的信息
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE" + subreddit.toUpperCase() + " SUBREDDIT!");
});

// 这条语句的用法还需要再了解
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});
```
