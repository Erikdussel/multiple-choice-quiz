// 
function populate() {
    if(quiz.finished()) {
        showScores();
    } else {
        // show flag
        document.getElementById('flag').src = quiz.getCurrentQuestion().flag;
        // show multiplechoice
        var choices = quiz.getCurrentQuestion().choices;
        for(var i = 0; i < choices.length; i++) {
            var el = document.getElementById("choice" + i);
            el.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        } showProgress();
    }
};
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var el = document.getElementById("progress");
    el.innerHTML = "Question " + '<b>' + currentQuestionNumber + "/" + quiz.questions.length + '</b>';
    el.innerHTML += "\n Points: " + '<b>' + quiz.score + '</b>';
};
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You scored " + quiz.score + " out of " + quiz.questionIndex + "</h2>";
    gameOverHTML += "<button id='replay-btn' onClick='location.reload()'> TRY AGAIN </button>";
    var el = document.getElementById("quiz");
    el.innerHTML = gameOverHTML;
};
// create questions
var questions = [new Question("img/albania.png", ["Andorra", "Belarus", "Albania", "Montenegro"], "Albania"),new Question("img/andorra.png", ["Romania", "Moldavia", "Latvia", "Andorra"], "Andorra"),new Question("img/armenia.png", ["Azerbaijan", "Moldavia", "Croatia", "Armenia"], "Armenia"),new Question("img/austria.png", ["Latvia", "Finland", "Austria", "Norway"], "Austria"),new Question("img/azerbaijan.png", ["Azerbaijan", "Belgium", "Armenia", "Sweden"], "Azerbaijan"),new Question("img/belarus.png", ["Belarus", "Bulgaria", "Liechtenstein", "Russia"], "Belarus"),new Question("img/belgium.png", ["Belarus", "Luxembourg", "Germany", "Belgium"], "Belgium"),new Question("img/bosnia.png", ["Serbia", "Bosnia and Herzegovina", "Albania", "Montenegro"], "Bosnia and Herzegovina"),new Question("img/bulgaria.png", ["Bulgaria", "Liechtenstein", "Romania", "San Marino"], "Bulgaria"),new Question("img/croatia.png", ["The Netherlands", "Denmark", "Austria", "Croatia"], "Croatia"),new Question("img/cyprus.png", ["Greece", "Cyprus", "Malta", "Czechia"], "Cyprus"),new Question("img/czech.png", ["Czechia", "Poland", "Slovenia", "Croatia"], "Czechia"),new Question("img/denmark.png", ["Iceland", "Sweden", "Norway", "Denmark"], "Denmark"),new Question("img/estonia.png", ["Latvia", "Lithuania", "Estonia", "Finland"], "Estonia"),new Question("img/finland.png", ["Denmark", "Finland", "Slovakia", "Norway"], "Finland"),new Question("img/france.png", ["France", "Andorra", "United Kingdom", "Poland"], "France"),new Question("img/georgia.png", ["Poland", "Malta", "Georgia", "Czechia"], "Georgia"),new Question("img/germany.png", ["Belgium", "Armenia", "Sweden", "Germany"], "Germany"),new Question("img/greece.png", ["Cyprus", "Malta", "Greece", "Macedonia"], "Greece"),new Question("img/hungary.png", ["The Netherlands", "Hungary", "Austria", "Latvia"], "Hungary"),new Question("img/kazakhstan.png", ["Ukraine", "Azerbaijan", "Georgia", "Kazakhstan"], "Kazakhstan"),new Question("img/iceland.png", ["Iceland", "Finland", "Denmark", "Norway"], "Iceland"),new Question("img/ireland.png", ["Italy", "Ireland", "France", "Belgium"], "Ireland"),new Question("img/italy.png", ["Vatican City", "Italy", "Iceland", "France"], "Italy"),new Question("img/latvia.png", ["Latvia", "Lithuania", "Ukraine", "Austria"], "Latvia"),new Question("img/liechtenstein.png", ["Luxembourg", "Slovakia", "Switzerland", "Liechtenstein"], "Liechtenstein"),new Question("img/lithuania.png", ["Latvia", "Liechtenstein", "Lithuania", "Iceland"], "Lithuania"),new Question("img/luxembourg.png", ["The Netherlands", "Hungary", "Luxembourg", "Croatia"], "Luxembourg"),new Question("img/malta.png", ["San Marino", "Vatican City", "Belarus", "Malta"], "Malta"),new Question("img/macedonia.png", ["Albania", "Montenegro", "Monaco", "Macedonia"], "Macedonia"),new Question("img/moldova.png", ["Latvia", "Romania", "Andorra", "Moldova"], "Moldova"),new Question("img/monaco.png", ["Poland", "Monaco", "Austria", "Malta"], "Monaco"),new Question("img/montenegro.png", ["Monaco", "Montenegro", "Portugal", "Albania"], "Montenegro"),new Question("img/netherlands.png", ["The Netherlands", "Luxembourg", "Lithuania", "Andorra"], "The Netherlands"),new Question("img/norway.png", ["Norway", "Finland", "Iceland", "Estonia"], "Norway"),new Question("img/poland.png", ["Malta", "Poland", "Ukraine", "Slovakia"], "Poland"),new Question("img/portugal.png", ["Spain", "France", "Belgium", "Portugal"], "Portugal"),new Question("img/romania.png", ["Romania", "Bulgaria", "Moldova", "Germany"], "Romania"),new Question("img/russia.png", ["Ukraine", "Luxembourg", "Russia", "Georgia"], "Russia"),new Question("img/sanmarino.png", ["Vatican City", "Slovenia", "Greece", "San Marino"], "San Marino"),new Question("img/serbia.png", ["Slovenia", "Slovakia", "Serbia", "Czechia"], "Serbia"),new Question("img/slovakia.png", ["Serbia", "Russia", "Slovakia", "Slovenia"], "Slovakia"),new Question("img/slovenia.png", ["Slovenia", "Slovakia", "Ukraine", "Poland"], "Slovenia"),new Question("img/spain.png", ["Ukraine", "Portugal", "Spain", "United Kingdom"], "Spain"),new Question("img/sweden.png", ["Denmark", "Finland", "Germany", "Sweden"], "Sweden"),new Question("img/switzerland.png", ["Lithuania", "Switzerland", "Austria", "Romania"], "Switzerland"),new Question("img/turkey.png", ["Greece", "Cyprus", "Armenia", "Turkey"], "Turkey"),new Question("img/ukraine.png", ["Russia", "Romania", "Moldavia", "Ukraine"], "Ukraine"),new Question("img/uk.png", ["Ireland", "United Kingdom", "France", "Norway"], "United Kingdom"),new Question("img/vatican.png", ["Vatican City", "Italy", "San Marino", "Liechtenstein"], "Vatican City")];
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
var quiz = new Quiz(questions);
// call populate
populate();