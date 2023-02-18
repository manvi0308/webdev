//! JS is dynamically typed
//! Meaning variables are not bound to any fixed data type


//^ Seven primitive data types: Number, BigInt, Strings, Boolean, Null, Undefined, Symbol
//^ One non-primitive data type is Object (third.js)
// Strings
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`
// There are 3 types of quotes, '', "" and ``.
//~ Backtics are extended functionality quotes, They 
//~ allow us to embed variables and expressions 
// into a string by wrapping them in ${…}

console.log(`${str}, world`);
console.log(`three is ${1 + 2}`);


//~ null means contain null value and undefined
//~ means value is not assigned, means variable is
//~ declared but value not assigned