function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
Quiz.prototype.getCurrentQuestion = function() {

    return this.questions[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
    if(this.getCurrentQuestion().isCorrectAnswer(answer)) {
    	var correctAnswer = document.getElementById('showAnswer');
    	correctAnswer.style.backgroundColor = 'green';
        this.score++;
    } else {
    	var wrongAnswer = document.getElementById('showAnswer');
    	wrongAnswer.style.backgroundColor = 'red';
    } this.questionIndex++;
}
Quiz.prototype.finished = function() {
    return this.questionIndex === this.questions.length;
}