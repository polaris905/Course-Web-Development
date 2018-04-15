$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation(); //这个语句用来防止span的事件发生后，引发他的上级元素li的事件
});

$("input[type='text']").on("keypress", function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"); //注意这里面单引号和双引号的用法，否则会出现问题
	}
});

$("#toggle-form").on("click", function() {
	$("input[type='text']").fadeToggle();
});
