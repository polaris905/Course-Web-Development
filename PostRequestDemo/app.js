// 在终端要输入以下代码
// npm init
// npm install express --save
// npm install ejs --save
// npm install body-parser --save

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var friends = ["Tony", "Mike", "Tom", "John"];

// 下面代码一般情况下复制拿来用即可
app.use(bodyParser.urlencoded({extended: true}));
// 下面代码用来指示默认后缀为ejs
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    friends.push(req.body.newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    // 下面代码{}中第二个friends指代的是上面声明的数组
    res.render("friends", {varFriends : friends});
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server is launching!!!");
});
