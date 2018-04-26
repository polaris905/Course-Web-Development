var playerButtons = [document.querySelector("#p1"), document.getElementById("p2")];
var resetButton = document.querySelector("#reset");
var displays = [document.querySelector("#p1Display"), document.querySelector("#p2Display")];
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input[type='number']");
var gameOver = false;
var winningScore = 5;

var scores = [0, 0];

// 相对于课程里的代码，这里做了更加抽象的方法，用playerId作为参数来分别添加两个按钮的事件
function buttonAddEventListener(playerId) {
	playerButtons[playerId].addEventListener("click", function() {
	    if (!gameOver) {
		    scores[playerId]++;
		    displays[playerId].textContent = scores[playerId];
		    if (scores[playerId] === winningScore) {
			    gameOver = true;
			    displays[playerId].classList.toggle("winner");
		    }
	    }
    });
}

buttonAddEventListener(0);
buttonAddEventListener(1);

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
	scores = [0, 0];
	gameOver = false;
	// 这里可能还有改进的方法，如何进一步抽象化
	displays[0].textContent = scores[0];
	displays[0].classList.remove("winner");
	displays[1].textContent = scores[1];
	displays[1].classList.remove("winner");
} 

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    // 这里加上reset()是为了确保在调整胜利分数时比分清零，否则容易出现设置分数高于目前分数，而目前分数不能再改变了
    reset();
})
