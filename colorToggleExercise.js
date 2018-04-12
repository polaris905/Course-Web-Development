var button = document.querySelector("button");
/*我之前用的是这种算法，实际上用下面那种更加简洁
  var isPurple = false;
  button.addEventListener("click", function(){
   	if(isPurple){
  		document.body.style.background = "white";
  	}
	else {
  		document.body.style.background = "purple";
  	}
  	isPurple = !isPurple;
  });
*/

button.addEventListener("click", function(){
	document.body.classList.toggle("purple"); // 掌握toggle的妙处
});
