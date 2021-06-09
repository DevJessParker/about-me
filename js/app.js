'use strict';

console.log('Hello, grading TA.')

// User greeting prompt

let username = prompt('Hello! It looks like you want to learn more about me. But first, what is your name?');
console.log(username)

// Boolean 1

let likereading = prompt('For the following questions, please answer yes or no. Do I like to read, ' + username + '?');
let lowercaseLikereading = likereading.toLowerCase();
console.log(lowercaseLikereading);
 
if (lowercaseLikereading === 'yes' || lowercaseLikereading === 'y') {
  alert('Correct! I love to read.');
} else if (lowercaseLikereading === 'no' || lowercaseLikereading === 'n') {
  alert('You have choosen poorly. I love to read.');
} else {
  alert('This input is not valid for the question.');
}

// Boolean 2

let college = prompt('Have I been to college?');
let lowercaseCollege = college.toLowerCase();
console.log(lowercaseCollege);

if (lowercaseCollege === 'yes' || lowercaseCollege === 'y') {
  alert('You\'re on a roll! I graduated from university in 2010.');
} else if (lowercaseCollege === 'no' || lowercaseCollege === 'n') {
  alert('Darn. Wrong answer. I graduated from university in 2010.');
} else {
  alert('Invalid response. Please stop breaking me.');
}

// Boolean 3

let hawaii = prompt('Have I ever lived in Hawaii?');
let lowercaseHawaii = hawaii.toLowerCase();
console.log(lowercaseHawaii);

if (lowercaseHawaii === 'yes' || lowercaseHawaii === 'y') {
  alert('You got it right! I lived in Hawaii when I was much younger.');
} else if (lowercaseHawaii === 'no' || lowercaseHawaii === 'n') {
  alert('Oh no! Wrong answer. I lived there when I was very young.');
} else {
  alert('Please stop confusing me.');
}

// Boolean 4

let hamburgers = prompt('Do I love hamburgers?');
let lowercaseHamburgers = hamburgers.toLowerCase();
console.log(lowercaseHamburgers);

if (lowercaseHamburgers === 'yes' || lowercaseHamburgers === 'y') {
  alert('Gross! No, I hate hamburgers.');
} else if (lowercaseHamburgers === 'no' || lowercaseHamburgers === 'n') {
  alert('Spot on! Hamburgers are gross.');
} else {
  alert('Please stop breaking my booleans.')
}

// Boolean 5

let homework = prompt('Did I write my homework code correctly the very first time?');
let lowercaseHomework = homework.toLowerCase();
console.log(lowercaseHomework);

if (lowercaseHomework === 'yes' || lowercaseHomework === 'y') {
  alert('Good guess, but literally zero students wrote correct code the first time.');
} else if (lowercaseHomework === 'no' || lowercaseHomework === 'n') {
  alert('Are you honestly surprised? Of course I didn\'t!');
} else {
  alert('Invalid response. Computer is angry.');
}

let goodbye = alert('Thanks for getting to know me, ' + username + '!');



