const age = 24;
const name = "John Doe";
const dob = "1999-01-01";

function getUserInfo() {
  return {
    name: name,
    age: age,
    dateOfBirth: dob
  };
}

function isAdult() {
  return age >= 18;
}

function newFn() {
  console.log("This is a new function.");
}

