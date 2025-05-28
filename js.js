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
let name = "Priyanka";
console.log(name.toLowerCase());
