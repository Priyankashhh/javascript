let a = "Priyanka";
let b = 22;
console.log(a + b);
console.log(typeof a + b);
console.log(typeof (a + b));
const c = {
	name: "Priyanka",
	age: 22,
};
c["masters"] = "mca";
c["masters"] = "bsc";
c["age"] = 20;
console.log(c);

const dict = {
	jeopardize: " To put something in danger or at risk.",
	paradox:
		"A statement or situation that seems contradictory but might be true.",
	telepathic:
		"Having the ability to read or communicate thoughts without speaking; mind-to-mind communication.",
	resonance:
		"Having the ability to read or communicate thoughts without speaking; mind-to-mind communication.",
	resilience: "The ability to recover quickly from difficulties or stress.",
	comply: "To follow rules or do what is asked.",
};
console.log(dict);
console.log(dict.paradox);
// let p =prompt ("Hey are u single?")
// console.log(p)
let p = "yes";
p = Number.parseInt(p);
console.log(typeof p);
if (p > 0) {
	alert("this is valid");
}
