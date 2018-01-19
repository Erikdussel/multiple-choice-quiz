// creates question class
class question{
	constructor(flag, choices, answer) {
		this.flag = flag;
		this.choices = choices;
		this.answer = answer;
	}
	isCorrectAnswer(choice) {
		return this.answer === choice;
	}
}