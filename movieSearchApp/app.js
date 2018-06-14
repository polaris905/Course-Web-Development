var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    // 返回search.ejs页面
    res.render("search");
});

app.get("/results", function(req, res) {
    // search.ejs页面调用results.ejs页面，把req也就是前者页面里的name为search的值赋值给query变量
    var query = req.query.search;
    // 声明变量用来保存query内容为动态的链接
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + query;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {dataEjs: data});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Movie API is started!");
});
