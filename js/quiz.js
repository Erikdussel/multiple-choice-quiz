function landingPage() {
    var el = document.getElementById('landingPage');
    document.getElementById('start-quiz').style.display = "none";
    el.innerHTML = "<div><h1>EUROPEAN FLAG QUIZ!</h1><img src='img/cover.png'><h3>PRESS <b>PLAY</b> TO START THE QUIZ</h3><button id='start-button' onClick='showQuestion()'><h2>PLAY</h2></button></div>";
};
function showQuestion() {
    document.getElementById('landingPage').style.display = "none";
    document.getElementById('start-quiz').style.display = "block";
    if(multipleChoiceQuiz.finished()) {
        showScores();
    } else {
        // show flag
        document.getElementById('flag').src = multipleChoiceQuiz.getCurrentQuestion().flag;
        // show multiplechoice
        var choices = multipleChoiceQuiz.getCurrentQuestion().choices;
        for(var i = 0; i < choices.length; i++) {
            var el = document.getElementById("choice" + i);
            el.innerHTML = choices[i];
            el.style.fontFamily = 'Verdana, Geneva, sans';
            guess("button" + i, choices[i]);
        } showProgress();
    }
};
// checks which button has been pressed. And 
function guess(id, input) {
    var button = document.getElementById(id);
    button.onclick = function() {
        multipleChoiceQuiz.guessInput(input);
        showQuestion();
    }
};
// 
function showProgress() {
    var currentQuestionNumber = multipleChoiceQuiz.questionIndex + 1;
    var el = document.getElementById("progress");
        el.innerHTML = "Question " + '<b>' + currentQuestionNumber + "/" + multipleChoiceQuiz.questions.length + '</b>';
        el.innerHTML += "<br> Points: " + '<b>' + multipleChoiceQuiz.score + '</b>';
        el.innerHTML += "<br> Wrong: " + '<b>' + ((currentQuestionNumber - 1) - multipleChoiceQuiz.score) + '</b>';
};


function showScores() {
    var finishedState = "<h1>Result</h1>";
    finishedState += "<h2 id='score'> You scored " + multipleChoiceQuiz.score + " out of " + multipleChoiceQuiz.questionIndex + "</h2>";
    finishedState += "<button id='replay-button' onClick='location.reload()'> TRY AGAIN </button>";
    var el = document.getElementById("quiz");
    el.innerHTML = finishedState;
};

// create questions
var questions = [new question("img/albania.png", ["Andorra", "Belarus", "Albania", "Montenegro"], "Albania"),
                    new question("img/andorra.png", ["Romania", "Moldavia", "Latvia", "Andorra"], "Andorra"),
                    new question("img/armenia.png", ["Azerbaijan", "Moldavia", "Croatia", "Armenia"], "Armenia"),new question("img/austria.png", ["Latvia", "Finland", "Austria", "Norway"], "Austria"),new question("img/azerbaijan.png", ["Azerbaijan", "Belgium", "Armenia", "Sweden"], "Azerbaijan"),new question("img/belarus.png", ["Belarus", "Bulgaria", "Liechtenstein", "Russia"], "Belarus"),new question("img/belgium.png", ["Belarus", "Luxembourg", "Germany", "Belgium"], "Belgium"),new question("img/bosnia.png", ["Serbia", "Bosnia and Herzegovina", "Albania", "Montenegro"], "Bosnia and Herzegovina"),new question("img/bulgaria.png", ["Bulgaria", "Liechtenstein", "Romania", "San Marino"], "Bulgaria"),new question("img/croatia.png", ["The Netherlands", "Denmark", "Austria", "Croatia"], "Croatia"),new question("img/cyprus.png", ["Greece", "Cyprus", "Malta", "Czechia"], "Cyprus"),new question("img/czech.png", ["Czechia", "Poland", "Slovenia", "Croatia"], "Czechia"),new question("img/denmark.png", ["Iceland", "Sweden", "Norway", "Denmark"], "Denmark"),new question("img/estonia.png", ["Latvia", "Lithuania", "Estonia", "Finland"], "Estonia"),new question("img/finland.png", ["Denmark", "Finland", "Slovakia", "Norway"], "Finland"),new question("img/france.png", ["France", "Andorra", "United Kingdom", "Poland"], "France"),new question("img/georgia.png", ["Poland", "Malta", "Georgia", "Czechia"], "Georgia"),new question("img/germany.png", ["Belgium", "Armenia", "Sweden", "Germany"], "Germany"),new question("img/greece.png", ["Cyprus", "Malta", "Greece", "Macedonia"], "Greece"),new question("img/hungary.png", ["The Netherlands", "Hungary", "Austria", "Latvia"], "Hungary"),new question("img/kazakhstan.png", ["Ukraine", "Azerbaijan", "Georgia", "Kazakhstan"], "Kazakhstan"),new question("img/iceland.png", ["Iceland", "Finland", "Denmark", "Norway"], "Iceland"),new question("img/ireland.png", ["Italy", "Ireland", "France", "Belgium"], "Ireland"),new question("img/italy.png", ["Vatican City", "Italy", "Iceland", "France"], "Italy"),new question("img/latvia.png", ["Latvia", "Lithuania", "Ukraine", "Austria"], "Latvia"),new question("img/liechtenstein.png", ["Luxembourg", "Slovakia", "Switzerland", "Liechtenstein"], "Liechtenstein"),new question("img/lithuania.png", ["Latvia", "Liechtenstein", "Lithuania", "Iceland"], "Lithuania"),new question("img/luxembourg.png", ["The Netherlands", "Hungary", "Luxembourg", "Croatia"], "Luxembourg"),new question("img/malta.png", ["San Marino", "Vatican City", "Belarus", "Malta"], "Malta"),new question("img/macedonia.png", ["Albania", "Montenegro", "Monaco", "Macedonia"], "Macedonia"),new question("img/moldova.png", ["Latvia", "Romania", "Andorra", "Moldova"], "Moldova"),new question("img/monaco.png", ["Poland", "Monaco", "Austria", "Malta"], "Monaco"),new question("img/montenegro.png", ["Monaco", "Montenegro", "Portugal", "Albania"], "Montenegro"),new question("img/netherlands.png", ["The Netherlands", "Luxembourg", "Lithuania", "Andorra"], "The Netherlands"),new question("img/norway.png", ["Norway", "Finland", "Iceland", "Estonia"], "Norway"),new question("img/poland.png", ["Malta", "Poland", "Ukraine", "Slovakia"], "Poland"),new question("img/portugal.png", ["Spain", "France", "Belgium", "Portugal"], "Portugal"),new question("img/romania.png", ["Romania", "Bulgaria", "Moldova", "Germany"], "Romania"),new question("img/russia.png", ["Ukraine", "Luxembourg", "Russia", "Georgia"], "Russia"),new question("img/sanmarino.png", ["Vatican City", "Slovenia", "Greece", "San Marino"], "San Marino"),new question("img/serbia.png", ["Slovenia", "Slovakia", "Serbia", "Czechia"], "Serbia"),new question("img/slovakia.png", ["Serbia", "Russia", "Slovakia", "Slovenia"], "Slovakia"),new question("img/slovenia.png", ["Slovenia", "Slovakia", "Ukraine", "Poland"], "Slovenia"),new question("img/spain.png", ["Ukraine", "Portugal", "Spain", "United Kingdom"], "Spain"),new question("img/sweden.png", ["Denmark", "Finland", "Germany", "Sweden"], "Sweden"),new question("img/switzerland.png", ["Lithuania", "Switzerland", "Austria", "Romania"], "Switzerland"),new question("img/turkey.png", ["Greece", "Cyprus", "Armenia", "Turkey"], "Turkey"),new question("img/ukraine.png", ["Russia", "Romania", "Moldavia", "Ukraine"], "Ukraine"),new question("img/uk.png", ["Ireland", "United Kingdom", "France", "Norway"], "United Kingdom"),new question("img/vatican.png", ["Vatican City", "Italy", "San Marino", "Liechtenstein"], "Vatican City")];
// shuffle them questions
function shuffleQuestions(questions) {
    for (i = this.questions.length - 1;i > 0;i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.questions[i];
        this.questions[i] = this.questions[j];
        this.questions[j] = x;
    }
};
shuffleQuestions();
// create quiz
var multipleChoiceQuiz = new quiz(questions);
landingPage();
// call showQuestion
