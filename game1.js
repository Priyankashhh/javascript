// let min = 0;
// let max = 100;
let original_num = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;
let guesses = [];

do {
	guess = prompt("enter a random no");
	guess = Number.parseInt(guess);
	if (guess < 1 || guess > 100) {
		alert("Please enter a number between 1 and 100.");
		continue;
	}

	attempts++;
	guesses.push(guess);
	if (guess == original_num) {
		alert("guess was correct");
		break;
	} else if (guess < original_num) {
		alert("lesser than original number");
	} else if (guess > original_num) {
		alert("greater than original number");
	} else alert("please enter a valid number");
} while (true);

alert("yaayyy move to next level");

let finalScore = 100 - attempts;
alert(`your score: ${finalScore}`);
alert("what guesses you made " + guesses);
alert("secret number was" + original_num);
