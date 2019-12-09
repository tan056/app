const level1Button = document.getElementById('level1-btn');
const level2Button = document.getElementById('level2-btn');
const level3Button = document.getElementById('level3-btn');
const level4Button = document.getElementById('level4-btn');
const level5Button = document.getElementById('level5-btn');

const startContainer = document.getElementById("start");
const questionContainerElement = document.getElementById("quiz");
level1Button.addEventListener('click', startGame);

function startGame () { 
    startContainer.classList.add('hide');
    questionContainerElement.classList.remove('hide'); 
    populate();
}
function populate() {
    if(quiz.isEnded()) {
        // show score
        showScores(); 
    }
    else{
        // show question
       // startButton.classList.add('hide');
      //  questionContainerElement.classList.remove('hide'); 
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
         var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++) {
            var element = document.getElementById("choice" + i);
           element.innerHTML = choices[i];
           guess("btn" + i, choices[i]);
       }

       showProgress();

    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }

}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}


var questions = [
    new Question("which one is not an object oriented programming language?", ["java","c#","c++","c"], "c"),
    new Question("which one is not an object oriented programming language", ["java","c#","c++","c"], "c"),
    new Question("which one is not an oop language?", ["java","c#","c++","c"], "c"),
    new Question("which one is not an object oriented programming language?", ["java","c#","c++","c"], "c"),
    new Question("which one is not an object oriented programming language", ["java","c#","c++","c"], "c"),
    new Question("which one is not an oop language?", ["java","c#","c++","c"], "c")
];

var quiz = new Quiz(questions);

populate();