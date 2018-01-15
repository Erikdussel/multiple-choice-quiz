// create question class
function question(flag, choices, answer) {
    this.flag = flag;
    this.choices = choices;
    this.answer = answer;
}
question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
