// References and Copying
// Objects are copied by reference, that is if
// we are trying to create a copy of an object
// the new copy will be simply pointing to the old
// object memory location.
// In case of variable, a new memory space will be allocated
// to the new variable.

//! A variable assigned to an object stores not the object itself, but its “address in memory”

//ToDo Simple example
let user = {
  name: "John",
  surname: "Smith",
};

let copy = user;
console.log(copy); // Here it will be john smith

copy.surname = "Chaddha";

// if a new copy was created then original object should
// not get modified, but its modified.
//^ Hence proved objects are copied by reference
console.log(user.surname);

//ToDo Comparing two objects
console.log(user == copy); // returns true because they are pointing to same memory location
let a = {};
let b = {};
console.log(a == b); // false, because they are two different objects pointing to diff. memory location

//ToDO Cloning and Merging
//Object.assign(dest, ....source), dest is the target object
//Copying objects p1 and p2 inside obj1
let obj1 = {post:'ASE'};
let p1 = {view:'Yes'};
let p2 = {edit:'Yes'};

Object.assign(obj1,p1,p2);
console.log(obj1);

//ToDo Nested cloning
// If an object has nested objects inside it, so use
// structuredClone(object), it will copy the object with 
// all its nested properties

let obj2 = {
    name:{
        fName:'Manvi',
        lName:'Chaddha'
    },
    age:22,
    salary:78000
}

let obj3 = structuredClone(obj2);
console.log(obj2);