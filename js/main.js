
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question5.value;


	var correct = 0;


	if (question1 == "$5") {
		correct++;
	}	
	if (question2 == "Hartford") {
		correct++;
	}
	if (question3 == "Hartford") {
		correct++;
	}	
	if (question4 == "Hartford") {
		correct++;
	}
	if (question5 == "Hartford") {
		correct++;
	}	
	if (question6 == "Hartford") {
		correct++;
	}	

	

	document.getElementById("number_correct").innerHTML = "Your score is " + correct;
	}
	