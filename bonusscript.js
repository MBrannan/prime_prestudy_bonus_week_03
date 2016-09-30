function add(x) {
	return x + 2
}

function multiply(x) {
	return x * 3
}

function subtract(x) {
	return x - 4
}

var x = 4

var y = add(multiply(subtract(x)));

console.log("The answer to this equation is " + y);
