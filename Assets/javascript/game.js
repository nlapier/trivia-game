var correct = 0;
var incorrect = 0;
var unanswered = 0;
var currentQuestionObject;

var swallow = new triviaQuestion("What is the airspeed velocity of an unladen swallow?", "What do you mean - African or European swallow?",
	"13 KPH", "Monty", "Python", this.a1, "http://thelittle.org/sites/default/files/imges/film/2.COLOR_galloping%20knights.jpg");

var sherman - new triviaQuestion("On December 21, 1864, General Sherman’s famous “March to the Sea” concluded with the capture of what Southern city?",
	"Atlanta", "Charleston", "Savannah", "Montgomery", this.a3, "http://amstudjh56.weebly.com/uploads/2/5/0/4/25048322/1714752.jpg?922");

var ribs = new triviaQuestion("On the human body, the intercostal muscles are located where?", "The hands", "The ribs", 
	"The knees", "The hips", this.a2, "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/1114_Thorax_zoom.png/300px-1114_Thorax_zoom.png");

var questionArray =[swallow, sherman, ribs];

var timer = {
	timeLeft: 15;

	countDown: function(){
		tickTock = setInterval(timer.callBack, 1000)
	};

	callBack: function(){
		timer.timeLeft--;
		$("#timeDiv").html("<p>Time Remaining: " + timeLeft + " Seconds </p>")
	};

	reset: function(){
		timeLeft = 15;
	}
}

function triviaQuestion (question, a1, a2, a3, a4, correct, img){
	this.question = question;
	this.a1 = a1;
	this.a2 = a2;
	this.a3 = a3;
	this.a4 = a4;
	this.correct = correct;
	this.img = img
}

function newQuestion(){
	currentQuestion = questionArray[getRandomInt(questionArray.length)];
	timer.reset();
	timer.countDown();
	$("#questionDiv").html(currentQuestion);
	for (var i = 1; i <= 4; i++){
		var a = currentQuestionObject["a" + i]
		$("#answerDiv").append(a).data(a);
	}
	$("#questionDiv").data(currentQuestion);
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}



//When the page first loads, display a self-explanatory title, and a start button
//Start button sets off a countdown
//Randomly selected question populates the screen with 4 choices 
//correct, incorrect and unanswered display 0

//If the player selects a correct answer, "Corect!" will display along with relevant media
//If the player chooses incorrectly, "wrong" message will display along with correct answer
//If time runs out, "out of time" will display along with correct answer
//correct, incorrect, and unanswered update

//A new question, with a new countdown, start automatically.

//Once all questions are exhausted, display end game message, and change button to "start over"