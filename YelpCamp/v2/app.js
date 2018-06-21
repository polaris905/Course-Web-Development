var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// 连接到MongoDB数据库的yelp_camp数据集，如果没有，则创建一个新的数据集
mongoose.connect("mongodb://localhost/yelp_camp");

// 相当于定义一个模板，并不意味着里面的属性必须固定
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

// 第一个Campground是一个变量用来以后调用方法，参数里的Campground是将要创建的collections的名字，创建时自动加s为复数
var Campground = mongoose.model("Campground", campgroundSchema);

// 这行以后使用时复制即可，不需要理解
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// var george = new Campground({
//     name: "Harry",
//     image: "http://f.hiphotos.baidu.com/image/h%3D300/sign=9fc27aa361224f4a4899751339f69044/b3b7d0a20cf431ade6d64fbc4736acaf2edd982a.jpg",
//     description: "This is a test."
// });

// // 将george存入数据库
// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something went wrong");
//     }
//     else {
//         console.log("We just saved a cat to the DB");
//     }
// });

app.get("/", function(req, res) {
    res.render("landing");
});

// INDEX - displays a list of campgrounds
app.get("/campgrounds", function(req, res) {
    // 把v1版本的传入数组方法改为从数据库读取所有元素
    Campground.find({}, function(err, allCampgrounds) {
        if (err) {
            console.log(err);
        }
        else {
            res.render("index" , {campgrounds: allCampgrounds});      
        }
    });
});

// CREATE - add new campground to DB
// 听视频的意思是post里的campgrounds和get里的虽然名字一样，但是不是一回事，用相同的名字是一种习惯用法
app.post("/campgrounds", function(req, res) {
    var name = req.body.name,
        image = req.body.image,
        desc = req.body.description,
        newCampground = {name: name, image: image, description: desc};
    // 把v1版本的添加新对象到数组，改为添加到数据
    Campground.create(newCampground, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

// NEW - displays a form to make a new campground
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

// SHOW - shows info about one campground
// 要注意下面语句放置顺序，如果放在上面的new之前，则new语句失效
app.get("/campgrounds/:id", function(req, res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
        if(err) {
            console.log(err);
        }
        else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp server is started");
});
