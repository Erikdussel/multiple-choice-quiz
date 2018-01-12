// create question class
function Question(flag, choices, answer) {
    this.flag = flag;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
