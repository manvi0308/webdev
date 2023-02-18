// Objects
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user);

user.surname = "Pete";
console.log(user);
delete user.surname;
console.log(user);

// Write the function isEmpty(obj) which returns
// true if the object has no properties, false otherwise.

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started means there is
    // property in object, so its not empty object
    return false;
  }
  return true;
}

/*
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.*/

function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += salaries[key];
  }

  console.log(sum);
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
sumValues(salaries);

/*
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
^ before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

^ after the call
menu = {
  width: 400,
  height: 600,
  title
*/
function multiplyNumeric(obj) {
  // use typeof to check for a number in obj
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] = obj[key] * 2;
    }
  }
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);
console.log(menu);
