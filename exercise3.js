const Array_jokes = [
	`Why don't scientists trust atoms?
Because they make up everything.`,

	`What do you call fake spaghetti?
An impasta.`,

	`Why did the scarecrow win an award?
Because he was outstanding in his field.`,

	`What do you call cheese that isn't yours?
Nacho cheese.`,

	`Why did the bicycle fall over?
Because it was two-tired.`,

	`What do you call a fish wearing a bowtie?
Sofishticated.`,

	`Why can't your nose be 12 inches long?
Because then it would be a foot.`,

	`What did the zero say to the eight?
Nice belt!

Why did the math book look sad?
Because it had too many problems.`,

	`How do you organize a space party?
You planet.`,

	`Why did the golfer bring two pairs of pants?
In case he got a hole in one.`,

	`What do you call a factory that sells passable products?
A satisfactory.`,

	`Why did the cookie go to the hospital?
Because it felt crummy.`,

	`What do you call a belt made of watches?
A waist of time.`,

	`Why can't you give Elsa a balloon?
Because she will let it go.`,

	`What do you call a snowman with a six-pack?
An abdominal snowman.`,

	`Why did the tomato turn red?
Because it saw the salad dressing.`,

	`What do you call a pile of cats?
A meowtain.`,

	`Why did the coffee file a police report?
It got mugged.`,

	`How does a penguin build its house?
Igloos it together.`,

	`Why did the computer go to the doctor?
Because it had a virus.`,

	`What do you call a dinosaur with an extensive vocabulary?
A thesaurus.`,

	`Why did the chicken join a band?
Because it had the drumsticks.`,

	`What do you call a bear with no teeth?
A gummy bear.`,

	`Why did the man put his money in the freezer?
He wanted cold hard cash.`,

	`What did one wall say to the other?
I'll meet you at the corner.`,

	`Why don't skeletons fight each other?
They don't have the guts.`,

	`What do you call an alligator in a vest?
An investigator.`,

	`Why did the banana go to the doctor?
Because it wasn't peeling well.`,

	`What do you call a sleeping bull?
A bulldozer.`,

	`Why did the bicycle stand up by itself?
Because it was two-tired.`,

	`What do you call a cow with no legs?
Ground beef.`,

	`Why did the student eat his homework?
Because the teacher told him it was a piece of cake.`,

	`What do you call a dog magician?
A labracadabrador.`,

	`Why did the mushroom go to the party?
Because he was a fungi.`,

	`What do you call a fish without eyes?
Fsh.`,

	`Why did the man run around his bed?
Because he was trying to catch up on his sleep.`,

	`What do you call a can opener that doesn't work?
A can't opener.`,

	`Why did the golfer bring an extra shirt?
In case he got a hole in one.`,

	`What do you call a lazy kangaroo?
A pouch potato.`,

	`Why did the cow win an award?
Because she was outstanding in her field.`,

	`What do you call a pig that does karate?
A pork chop.`,

	`Why did the man get hit by a bike every day?
Because he was stuck in a vicious cycle.`,

	`What do you call a group of musical whales?
An orca-stra.`,

	`Why did the chicken go to the séance?
To talk to the other side.`,

	`What do you call a snowman with a temper tantrum?
A meltdown.`,

	`Why did the man put his money in the blender?
Because he wanted to make some liquid assets.`,

	`What do you call a cow with two legs?
Lean beef.`,

	`What do you call a bear that's stuck in the rain?
A drizzly bear.`,

	`Why did the man bring a ladder to the bar?
Because he heard the drinks were on the house.`,

	`What do you call a dog that can do magic?
A labracadabrador.`,

	`Why did the scarecrow become a successful neurosurgeon?
Because he was outstanding in his field.`,

	`What do you call a fish that practices medicine?
A sturgeon.`,

	`Why did the man put his car in the oven?
Because he wanted a hot rod.`,

	`What do you call a dinosaur that crashes his car?
Tyrannosaurus wrecks.`,

	`What do you call a pile of cats?
A meowtain.`,

	`Why did the man bring a ladder to the bar?
Because he heard the drinks were on the house.`,

	`What do you call a dog that can do magic?
A labracadabrador.`,

	`Why did the scarecrow become a successful neurosurgeon?
Because he was outstanding in his field.`,

	`What do you call a fish that practices medicine?
A sturgeon.`,

	`Why did the man put his car in the oven?
Because he wanted a hot rod.`,

	`What do you call a dinosaur that crashes his car?
Tyrannosaurus wrecks.`,

	`Why did the man put his money in the blender?
Because he wanted to make some liquid assets.`,

	`What do you call a pile of cats?
A meowtain.`,

	`Why did the man bring a ladder to the bar?
Because he heard the drinks were on the house.`,

	`What do you call a dog that can do magic?
A labracadabrador.`,

	`Why did the scarecrow become a successful neurosurgeon?
Because he was outstanding in his field.`,

	`What do you call a fish that practices medicine?
A sturgeon.`,

	`Why did the man put his car in the oven?
Because he wanted a hot rod.`,

	`What do you call a dinosaur that crashes his car?
Tyrannosaurus wrecks.`,

	`Why did the man put his money in the blender?
Because he wanted to make some liquid assets.`,

	`What do you call a pile of cats?
A meowtain.`,

	`Why did the man bring a ladder to the bar?
Because he heard the drinks were on the house.`,

	`What do you call a dog that can do magic?
A labracadabrador.`,

	`Why did the scarecrow become a successful neurosurgeon?
Because he was outstanding in his field.`,

	`What do you call a fish that practices medicine?
A sturgeon.`,

	`Why did the man put his car in the oven?
Because he wanted a hot rod.`,

	`What do you call a dinosaur that crashes his car?
Tyrannosaurus wrecks.`,

	`Why did the man put his money in the blender?
Because he wanted to make some liquid assets.`,

	`What do you call a pile of cats?
A meowtain.`,

	`Why did the man bring a ladder to the bar?
Because he heard the drinks were on the house.`,

	`What do you call a dog that can do magic?
A labracadabrador.`,

	`Why did the scarecrow become a successful neurosurgeon?
Because he was outstanding in his field.`,

	`What do you call a fish that practices medicine?
A sturgeon.`,

	`Why did the man put his car in the oven?
Because he wanted a hot rod.`,

	`What do you call a dinosaur that crashes his car?
Tyrannosaurus wrecks.`,

	`Why did the man put his money in the blender?
Because he wanted to make some liquid assets.`,

	`What do you call a pile of cats?
A meowtain.`,
];
let random_jokes;
random_jokes = Array_jokes[Math.floor(Math.random() * Array_jokes.length)];
console.log(Array_jokes);
console.log(random_jokes);
document.getElementsByClassName("jokes")[0].innerHTML = random_jokes;
