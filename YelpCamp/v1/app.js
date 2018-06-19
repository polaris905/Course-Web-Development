var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var campgrounds = [
       {name: "Sami", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf4c17da5efb4_340.jpg"},
       {name: "Mike", image: "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"},
       {name: "Kitty", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"},
       {name: "Sami", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf4c17da5efb4_340.jpg"},
       {name: "Mike", image: "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"},
       {name: "Kitty", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"},
       {name: "Sami", image: "https://pixabay.com/get/ea36b70928f21c22d2524518b7444795ea76e5d004b014439cf4c17da5efb4_340.jpg"},
       {name: "Mike", image: "https://pixabay.com/get/eb35b70b2df6033ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"},
       {name: "Kitty", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb7b9_340.jpg"}
];

// 这行以后使用时复制即可，不需要理解
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   res.render("campgrounds" , {campgrounds: campgrounds});
});

// 听视频的意思是post里的campgrounds和get里的虽然名字一样，但是不是一回事，用相同的名字是一种习惯用法
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp server is started");
});
