var numSquares = 6;
var colors = generateColor(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = colors[1];

easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

for (var i = 0; i < squares.length; i++) {
	// 初始化每个方块颜色
	squares[i].style.backgroundColor = colors[i];
	// 添加每个方块的事件
	squares[i].addEventListener("click", function() {
		var selectedColor = this.style.backgroundColor;
		if(selectedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			// 传递当前颜色作为参数，实现把当前点击的颜色代替所有颜色块的颜色
			changeColors(selectedColor);
			h1.style.backgroundColor = selectedColor;
			resetButton.textContent="Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// 用参数的颜色代替squares数组中所有元素的颜色
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

// 随机生成一个代表颜色的字符串
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

// 生成一个由num参数个随机颜色字符串组成的字符串数组
function generateColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr; 
}

// 从colors数组里面随机选一个颜色
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

resetButton.addEventListener("click", function() {
	colors = generateColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
});
