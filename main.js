
function check(){

	var question1 = document.quiz.question1.value;
	var correct ;


	if (question1 == "Hartford") {
		correct = 0;
	}	
	if (question1 == "Heartford") {
		correct = 1;
	}
	
	var pictures = ["TrangDu1.PNG", "lose.gif"];
	var messages = ["Người yêu Của Tới Nè hehe", "HuHu Buồn Quá Mình Ăn Lá Ngón Đây !"];


	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[correct];
	
	document.getElementById("picture").src = pictures[correct];
}



