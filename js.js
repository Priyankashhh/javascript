// let p = prompt("hey are u single?");
// console.log(p);
// let b = alert("damn you are happy");
// 2nd.
/*let p = prompt("Age bata do car chalane ki?");
p = Number.parseInt(p);
console.log(typeof p);
if (p < 0) {
	alert("this is  invalid age");
} else if (p < 10) {
	alert("you are too young to drive");
} else if (p < 18 && p >= 10) {
	alert("you will be eligible to drive after 18");
} else {
	alert("you are eligible to drive");
}
console.log("you can",p<18? "not drive" : "drive");*/
// 3rd
/*let age = prompt("what is your age?");
switch (age) {
	case "12":
		console.log("your age is 12");
		break;
	case "13":
		console.log("your age is 13");
        break;
	case "14":
		console.log("your age is 14");
        break;
	case "15":
		console.log("your age is 15");
        break;
        default:
            console.log("your age is not 12,13,14,15");
}*/
// 4th
/*let num = prompt("enter a number");
num = Number.parseInt(num);
if (num % 2 == 0 && num % 3 == 0) {
	console.log("number is divisible by 2 and 3");
} else {
	console.log("number is not divisible by 2 and 3");
}*/
// 5th
/*let age = 19;
let a =
	age > 18 ? "you are eligible to drive" : "you are not eligible to drive";
console.log(a);*/

//for loop
//sum of n natural no.
/*let sum = 0;
let n = prompt("enter the value of n");
n = Number.parseInt(n);
for (let i = 0; i < n; i++) {
	sum = sum + i + 1;
}
console.log("sum of first n natural no. is", sum);*/
//factorial
/*let factorial = 1;
let n = prompt("enter the value of n");
n = Number.parseInt(n);
for (let i = n; i >= 1; i--) {
	factorial = factorial * i;
}
console.log("fa actorial of", n, "is", factorial);*/

/*const marks = {
	Priyanka: 1,
	srishti: 2,
	dv: 3,
};*/
//for in loop
/*for(let a in marks){
    console.log(a,marks[a]);
}*/
//for of loop
/*for (let a of "Priyanka") {
	console.log(a);
}*/
//while loop;
/*
let n = prompt("enter a value of n");
n = Number.parseInt(n);
let i = 0;
do {
	console.log(i);
	i++;
} while (i < n);*/
//functions
/*function hello() {
	return "hi";
}
console.log(hello());*/
//alternate function
/*const hello = () => {
	return "hi";
};
console.log(hello());*/
//practiceset3
//1
//usinf for in loop
/*const marks = {
	harry: 98,
	roshan: 70,
	aakash: 7,
};
let a = prompt("enter the name of student to get marks");
a = Number.parseInt(a);
for (let a in marks) {
	console.log(a, marks[a]);
}*/
//using simple for koop
/*let marks = {
	harry: 90,
	roshan: 70,
	aakash: 7,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
	console.log(Object.keys(marks)[i], marks[Object.keys(marks)[i]]);
}*/
//2
//correct no. print
/*let cn = 5;
let i;
while (i != cn) {
	i = prompt("enter a number ");
	console.log("try again");
}
console.log("correct no.");*/
//3
//mean of 4 no.
/*const mean = (a, b, c, d) => {
	return (a + b + c + d) / 4;
};
console.log(mean(4, 5, 6, 7));*/
//string
/*let name = "Harry";
console.log(name.length);
console.log(name[0]);
console.log(name[1]);*/
/*let boy1 = "anurag";
let boy2 = "amit";
let line = `${boy2} is elder  than ${boy1}`;
console.log(line);*/
/*let fruits = "mango's";
console.log(fruits);*/

//print a string using for loop
/*let fr = "aman";
for (let i = 0; i <= fr.length; i++) {
	console.log(fr[i]);
}
*/

//ch 4 practiceset4
//1

// let name = "Priyanka is my name";
/*console.log(name.toLowerCase());
 */

// console.log(name.slice(2, 4));
// console.log(name.replace("yanka", "bhav"));
// let surname = "Sharma";
// console.log(name.concat(surname));
// console.log(name.trim("nka"));

//2 include
/*const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";
console.log(sentence.includes(word));

console.log(
	`The word "${word}" ${
		sentence.includes(word) ? "is" : "is not"
	} in the sentence`
);*/
// Expected output: "The word "fox" is in the sentence"

//startsWith

// console.log(name.startsWith("Priyanka", 2));
//Q4
/*let string = "Please give rs 1000";
let amount = string.slice("Please give rs ".length);
amount = Number.parseInt(amount);
console.log(typeof amount);*/

//Array

// let friends = ["Priyanka", "Rahul", "Aman", "Rakul", "aditya", "Lalit"];
// friends[3] = "himanshu";
// for (let i = 0; i < friends.length; i++) {
// 	console.log(friends[i]);
// }
// console.log(typeof friends);

/*let dost = friends.toString();
console.log(dost);
console.log(typeof dost);
let dost1 = friends.join("idk wtf ");
console.log(dost1);*/
/*friends.pop();
console.log(friends);*/
/*friends.push("hai bhgwan bchao mujhe ");*/
// console.log(friends);
//shift and unshift are same as pop and push
/*p = friends.unshift(
	"god save me suddenly its feeling all heavy again feeling lonely even when everyone is here "
);*/

// console.log(p, friends);

// delete friends[0];
// console.log(friends);
// console.log(friends.length);
/*
let enemy = ["me", "myself", "i"];
let belief = ["god", "life"];
let group = friends.concat(enemy, belief);
console.log(group);*/
/*friends.sort();
console.log(friends);
let compare = (a, b) => {
	return a - b;
};
let num = [23, 56, 7, 8, 4, 1, 77, 889];
num.sort(compare);
console.log(num);*/

/*let num = [22, 56, 8, 77, 45, 23, 45, 7, 69];
let del = num.splice(1, 3, 111, 222, 333, 666);
console.log(del);*/

//array.from
/*let name = "Priyanka";
let arr = Array.from(name);
console.log(arr);*/

// array.from of set
// let num = [7, 8, 7, 7, 1, 4, 4, 2, 8, 4];
// for (let i of num) {
// 	console.log(i);
// }
// for (let i in num) {
// 	console.log(i);
// }

///map
/*let arr = [4, 78, 90, 5];
let jadu = arr.map((x, index, array) => {
	console.log(x, index, array);
	return x - 1;
});
console.log(jadu);*/
/*let num = [1, 2, 3, 4, 5];
let jadu = num.filter((x) => {
	return x > 3;
});
console.log(jadu);*/

//reduce
/*let arr = [1, 2, 3, 4, 5];
let jadu = arr.reduce((a, b) => {
	return a + b;
});
console.log(jadu);*/

//chapter 5
//practice problem

//1
/*let num = [1, 2, 3, 4, 5];
let a = prompt("Enter a number");
a = Number.parseInt(a);
num.push(a);
console.log(num);*/

//2
/*let num = [1, 2, 3, 4, 5];
let a;
do {
	a = prompt("Enter a number");
	a = Number.parseInt(a);
	num.push(a);
} while (a != 0);
console.log(num);*/

//3
/*
let num = [10, 20, 32, 40, 55, 90];
let n = num.filter((x) => {
	return x % 10 == 0;
});
console.log(n);*/

//4
/*let num = [10, 20, 32, 40, 55, 90];
const square_func = (x) => {
	return x * x;
};
let n = num.map(square_func);
console.log(n);*/

//5
/*let n = [1, 2, 3, 4, 5];
let factorial = n.reduce((x, y) => {
	return x * y;
});
console.log(factorial);*/

//alert confirm prompt

/*alert("Enter a no.");
let a = prompt("Enter a number", "64");
a = Number.parseInt(a);
// document.write(a);
let write = confirm("do  u want to write");
if (write) {
	document.write(a);
} else {
	document.write("no");
}*/

//chapter 6
//1

// if (a >= 18) {
// 	alert("you can drive");
// } else {
// 	alert("sorry u cant drive");
// }
// console.log(a);
/*let runAgain = true;
const canDrive = (age) => {
	return age >= 18 ? true : false;
};

while (runAgain) {
	let age = prompt("Enter your age");
	age = Number.parseInt(age);
	if (age < 0) {
		alert("invalid age");
		console.error("please enter a valid age");
		// break;
	}
	if (canDrive(age)) {
		alert("you can drive");
	} else {
		alert("sorry u cant drive");
	}
	runAgain = confirm("do u want to play again");

	console.log(age);
}*/

// let again = confirm("do  u want to see the prompt again");
// if (again) {
// 	document.again(a);
// } else {
// 	document.again("no");
// }

//dom bom
// console.log(window);
//can also writw window infront globally used
/*document.write("hello world");
window.console.log(window);
console.log(document);
console.log(document.body);
document.body.style.background = "yellow";*/

//doc walk
/*console.log(document.body.firstChild);
console.log(document.body.lastChild);
let arr = Array.from(document.body.childNodes);
console.log(arr);
*/
/*
console.log(document.body.firstElementChild);
a = document.body.firstElementChild;
console.log(a.parentNode);
console.log(a.firstElementChild.nextSibling);
*/

//element only navigation
/*	document.body.style.background = "red";
};

let a = document.body;
console.log("first child of a is :", a.firstChild);
console.log("first Element child of a is :", a.firstElementChild);
console.log(a.previousElementSibling);
console.log(a.nextElementSibling);
console.log(a.firstElementChild);
console.log(a.lastElementChild);
*/

/*let t = document.body.firstElementChild.firstElementChild;
console.log(t.rows);
console.log(t.rows[0].rowIndex);
console.log(t);

console.log(t.head);
console.log(t.foot);*/

//portfolio

/*
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
	const wrapper = document.createElement("div");
	wrapper.innerHTML = [
		`<div class="alert alert-${type} alert-dismissible" role="alert">`,
		`   <div>${message}</div>`,
		'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
		"</div>",
	].join("");

	alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
	alertTrigger.addEventListener("click", () => {
		appendAlert("Nice, you triggered this alert message!", "success");
	});
}

//change the card title to red
let ctitle = document.getElementsByClassName("card-title")[0];
ctitle.style.color = "red";
//getElementById

let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color = "red";
ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
console.log(ctitles);

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "yellow";

console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));
*/
//khtm hogya upr tk portfolio wala

//lec37
/*let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));
console.log(id1.contains(sp1));
console.log(sp1.contains(id1));*/

//ch7 practice set

//1
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("ul")[0].lastElementChild.style.color = "green";
Array.from(document.getElementsByTagName("li")).forEach((element) => {
	element.style.background = "cyan";
});
