+ EJS一个实例  
在ejs文件中可以将js代码与html代码结合在一起。安装EJS执行npm install ejs --save  
调用render方法返回一个文件  
ejs文件中有两组符号分别是<%= %>和<% %>，区别在于：  
前者会将其中的函数执行结果添加到html中，后者只是执行其中的函数
+ 目录结构
```
EJSDemo
--public
    app.css
--views
----partials
      footer.ejs
      header.ejs
    home.ejs
    love.ejs
    posts.ejs
  app.js
```
+ 文件app.js
```js
var express = require("express");
var app = express();

// 告知系统从public目录下找要执行的css文件
app.use(express.static("public"));
// 告知系统文件名后缀为ejs，这样下面代码中render可以省略文件名ejs后缀
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {varThing: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "Post 2", author: "Charlie"},
        {title: "Post 3", author: "Colt"}
    ];
    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is launching");
})
```
+ 文件home.ejs
```ejs
<% include partials/header %>

<h1>Hello this is home page</h1>

<% include partials/footer %>
```
+ 文件love.ejs
```ejs
<% include partials/header %>

<h1>You are falling in love with: <%= varThing.toUpperCase() %>!</h1>

<% if (varThing.toLowerCase() === "rusky") { %>
    <p>You have made a good choice with rusky!</p>
<% } else { %>
    <p>You have made a bad choice!</p>
<% } %> 

<% include partials/footer %>
```
+ 文件posts.ejs
```ejs
<% include partials/header %>

<h1>This is posts home page!</h1>

<% posts.forEach(function(val) { %>
    <li>The title which is <%= val.title %> was written by <%= val.author %>.</li>
<% }) %>

<% include partials/footer %>
```
+ 文件header.ejs
```ejs
<!DOCTYPE html>
<html>
    <head>
        <title>Demo App</title>
        <!-- 下面这个/很重要 -->
        <link rel="stylesheet" href="/app.css">
    </head>
    <body>
```
+ 文件footer.ejs
```ejs
        <p>Trademark 2015</p>
    </body>
</html>
```
+ 文件app.css
```css
body {
    background: yellow;
    color: purple;
}
```
