function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var correct = 0;


	if (question1 == "Providence") {
		correct++;
	}
	if (question2 == "Hartford") {
		correct++;
	}	
	if (question3 == "Albany") {
		correct++;
	}
	
	var pictures = ["TrangDu.jpg", 
	"TrangDu1.PNG", 
	"lose.gif"];
	var messages = ["Great job!", "Người yêu Của Tới Nè hehe", "HuHu Buồn Quá Mình Ăn Lá Ngón Đây !"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	
	document.getElementById("picture").src = pictures[score];
}