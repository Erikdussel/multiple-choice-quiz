// creates quiz class
class quiz{
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getCurrentQuestion() {
        return this.questions[this.questionIndex];
    }
// check if the quess is correct or wrong and adds feedback to the screen

    guessInput(answer) {
        if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
            var correctAnswer = document.getElementById('showAnswer');
                correctAnswer.style.backgroundColor = 'green';
            var correctGuess = document.getElementById('question');
                correctGuess.innerHTML = '<h3>CORRECTEMUNDO!</h3>';
            this.score++;
        } else {
            var wrongAnswer = document.getElementById('showAnswer');
                wrongAnswer.style.backgroundColor = 'red';
            var showAnswer = document.getElementById('question');
                showAnswer.innerHTML = '<h3>WRONG! The correct answer is: ' + this.getCurrentQuestion().answer + '</h3>'
        } this.questionIndex++;
    }
    finished() {
        return this.questionIndex === this.questions.length;
    }
}