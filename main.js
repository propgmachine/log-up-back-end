// These variables are our "database" for users.
// You can actually change the values to whatever you'd like!
// And you can and should use them in your `isRegisteredUser` function.
// But we use them in your test code as well, so whatever you do, don't delete them!

const user1 = 'steve.hixson@codeimmersives.com';
const password1 = 'password01';
const user2 = 'stephen.hixson@digitalfilmacademy.edu';
const password2 = '1qaz2wsx#EDDC$RFV';
const user3 = 'sbhixson@gmail.com';
const password3 = 'theEarthIsFlat';


// **YOUR** code below. Pass those tests!

function isValidEmail(email) {
    return email.endsWith("@codeimmersives.com") && email.length > 20;
}

function isValidPassword(password) {
  return (
    password.length > 8 &&
    password.toUpperCase() === password &&
    password.toLowerCase() === password 
  );
}

function isRegisteredUser(email) {
  return email === user1 || email === user2 || email === user3;
}

function passwordMatches(email, password) {
  return (
    (email === user1 && password === password1) ||
    (email === user2 && password === password2) ||
    (email === user3 && password === password3) 
  );
}

function passWordMatchesMessage(email, password) {
  if (email === user1 && password === password1) {
    return 'Password matches!'
  } else if (email === user2 && password === password2) {
    return 'Password matches!'
  } else if (email === user3 && password === password3) {
    return 'Password matches!'
  } else {
    return 'Password does NOT match'
  }
}






// Our code below. Do not touch!


if (typeof isValidEmail === 'undefined') {
  isValidEmail = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof isRegisteredUser === 'undefined') {
  isRegisteredUser = undefined;
}

if (typeof passwordMatches === 'undefined') {
  passwordMatches = undefined;
}

if (typeof user1 === 'undefined') {
  user1 = undefined;
}

if (typeof user2 === 'undefined') {
  user2 = undefined;
}

if (typeof user3 === 'undefined') {
  user3 = undefined;
}

if (typeof password1 === 'undefined') {
  password1 = undefined;
}

if (typeof password2 === 'undefined') {
  password2 = undefined;
}

if (typeof password3 === 'undefined') {
  password3 = undefined;
}



module.exports = {
  isValidEmail,
  isValidPassword,
  isRegisteredUser,
  passwordMatches,
  user1,
  user2,
  user3,
  password1,
  password2,
  password3,
}
