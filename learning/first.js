//^ Nullish coalescing operator (??)

//^ Pre-req
//null and undefined are treated likewise
//a value is defined when its neither null nor undefined

//! Just to get the defined value out of two passed values
//^ Use case
// Used for getting the default value


// Example 1
// By not passing value
let user;
console.log(user ?? "Anonymous");

// By passing val
let user2 = "Manvi";
console.log(user2 ?? "Anonymous");

//Example 2
let fName = undefined;
let lName = "Chadha";
let nName = undefined;

console.log(fName ?? lName ?? nName ?? "No value is defined");

//^ NOTE
//The difference between || and ?? is, first one returns
// the first truthy value and ?? returns the first defined value
// Example 3
let height = 0;
console.log(height || 100); // O/P is 100, since 0, false and empty string are falsy values
console.log(height ?? 100); // O/P is 0, since 0 is a defined value
