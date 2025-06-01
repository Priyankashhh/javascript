let bots_option;
let botChose;
let timesPlayed = 0;
let userWins = 0;
let botWins = 0;

let userChose;
alert(`you are at \nsnake water gun\ngame zone`);

alert(
	`rules:\nsnake(s) wins over water(w)\nwater(w) wins over gun(g)\ngun(g) wins over snake(s)`
);
alert("you can enter either snake(s), water(w), or gun(g) for your choice");

let start = confirm("Lets Start?");

while (start) {
	bots_option = ["s", "w", "g"];
	botChose = bots_option[Math.floor(Math.random() * bots_option.length)];

	userChose = prompt("Enter your choice (s, w, g):").toLowerCase();
	if (!bots_option.includes(userChose)) {
		alert("Invalid input, please enter only s, w,or g");
		continue;
	}
	alert(`u chose ${userChose} and bot chose ${botChose}`);
	if (userChose == botChose) {
		alert("its a tie lets play again");
	} else if (
		(userChose == "s" && botChose == "w") ||
		(userChose == "w" && botChose == "g") ||
		(userChose == "g" && botChose == "s")
	) {
		alert("you win");
		userWins++;
	} else {
		alert("you lose");
		botWins++;
	}
	timesPlayed++;
	start = confirm("do u want to play again");
}
alert(`you played ${timesPlayed} times`);

alert("you are legendary");

alert(
	`game Over!\n${timesPlayed}\nyour wins: ${userWins}\nbot wins: ${botWins}`
);

if (userWins > botWins) {
	alert("you are the champion");
} else if (userWins < botWins) {
	alert("bot is the champion,may be next time u can win");
} else {
	alert("its a tie,lets play again.this time i might beat u");
}
