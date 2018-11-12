// JavaScript source code\

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Next checking to see if there are word is the array that is less then 6 char. 

// Check to see if words in the Array are greater then 6.

console.log(words.some((word) => {
    return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word => {
    return word.length > 5;
}));

// use the every method to return a boolean value. 
console.log(interestingWords.every((word => {
    return word.length > 5;
})));

