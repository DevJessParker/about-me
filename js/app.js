'use strict';

console.log('Hello, grading TA. I did console logs throughout just to help give myself a narrative.')

let quizscore = 0

// User Greeting Prompt

let username = prompt('Hello! It looks like you want to learn more about me. But first, what is your name?');
console.log('What is your username?');
console.log('The user\'s name is ' + username)

// Welcome Joke and Bonus Boolean

let joke = prompt('Welcome, ' + username + '! Would you like to take a quiz? Please answer yes or no.')
let lowercaseJoke = joke.toLowerCase();
console.log('Welocome, ' + username + '! Would you like to take a quiz?')
console.log('The user has answered ' + lowercaseJoke + ' to joke boolean. No points assigned to this question. Just for practice.');

if (lowercaseJoke === 'yes' || lowercaseJoke === 'y') {
  alert('Trick question. You don\'t have a choice.');
} else if (lowercaseJoke === 'no' || lowercaseJoke === 'no') {
  alert('Too bad. You have to.');
} else {
  alert('I did\'t understand your answer. Looks like you get to take a quiz now. You\'re welcome, ' + username + '.');
}
  
// Boolean 1

let likereading = prompt('There are 7 possible points on this quiz. For the following questions, please answer yes or no. Do I like to read, ' + username + '?');
let lowercaseLikereading = likereading.toLowerCase();
console.log('Boolean 1: Do I like to read?');
console.log('The user has answered ' + lowercaseLikereading);
 
if (lowercaseLikereading === 'yes' || lowercaseLikereading === 'y') {
  alert('Correct! I love to read.');
  quizscore++
  console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
} else if (lowercaseLikereading === 'no' || lowercaseLikereading === 'n') {
  alert('You have choosen poorly. I love to read.');
} else {
  alert('This input is not valid for the question. No points for you.');
}

// Boolean 2

let college = prompt('Have I been to college?');
let lowercaseCollege = college.toLowerCase();
console.log('Boolean 2: Have I been to college?');
console.log('The user has answered ' + lowercaseCollege);

if (lowercaseCollege === 'yes' || lowercaseCollege === 'y') {
  alert('You\'re on a roll! I graduated from university in 2010.');
  quizscore++
  console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
} else if (lowercaseCollege === 'no' || lowercaseCollege === 'n') {
  alert('Darn. Wrong answer. I graduated from university in 2010.');
} else {
  alert('Invalid response. Pay attention to the questions, ' + username + '.');
}

// Boolean 3

let hawaii = prompt('Have I ever lived in Hawaii?');
let lowercaseHawaii = hawaii.toLowerCase();
console.log('Boolean 3: Have I ever lived in Hawaii?');
console.log('The user has answered ' + lowercaseHawaii);

if (lowercaseHawaii === 'yes' || lowercaseHawaii === 'y') {
  alert('You got it right! I lived in Hawaii when I was much younger.');
  quizscore++
  console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
} else if (lowercaseHawaii === 'no' || lowercaseHawaii === 'n') {
  alert('Oh no! Wrong answer. I lived there when I was very young.');
} else {
  alert('Please stop confusing me.');
}

// Boolean 4

let hamburgers = prompt('Do I love hamburgers?');
let lowercaseHamburgers = hamburgers.toLowerCase();
console.log('Boolean 4: Do I love hamburgers?');
console.log('The user has entered ' + lowercaseHamburgers);

if (lowercaseHamburgers === 'yes' || lowercaseHamburgers === 'y') {
  alert('Gross! No, I hate hamburgers.');
} else if (lowercaseHamburgers === 'no' || lowercaseHamburgers === 'n') {
  alert('Spot on! Hamburgers are gross.');
  quizscore++
  console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
} else {
  alert('Please stop breaking my booleans.')
}

// Boolean 5

let homework = prompt('Did I write my coding homework correctly the very first time?');
let lowercaseHomework = homework.toLowerCase();
console.log('Boolean 5: Did I do my coding homework correctly the first time?');
console.log('The user has entered ' + lowercaseHomework);

if (lowercaseHomework === 'yes' || lowercaseHomework === 'y') {
  alert('Good guess, but literally zero students wrote correct code the first time.');
} else if (lowercaseHomework === 'no' || lowercaseHomework === 'n') {
  alert('Are you honestly surprised? Of course I didn\'t! Point for you.');
  quizscore++
  console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
} else {
  alert('Invalid response. Skynet is angry.');
}

//  Guessing Game


let correctanswer = 12
let totalguess = 4
console.log('Start of Number Guessing Game');
console.log('The correct answer is ' + correctanswer);

for (let guessnum= 0;  guessnum < 4; guessnum++){
  let userguess = prompt('I\'m thinking of a number between 1 - 50. Can you guess my number? You have ' + totalguess + ' attempts(s) remaining');
  console.log('Think of a number between 1 - 50')
  console.log('The user has guessed the number ' + userguess);
  
  if (userguess == correctanswer) {
    alert('Correct! My number is 12.');
    quizscore++
    console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
    break;
  }
  else if ((userguess <= 0 || userguess >= 51) && totalguess > 1) {
    alert('Error. Your number is outside the range. Please enter a valid number.')
    console.log('User has received an error message for being out of range.')
  } else if (userguess < correctanswer && guessnum < 3) {
    alert('Sorry! Your guess is too low. Try again.');
  } else if (userguess > correctanswer && guessnum < 3) {
    alert('Too high! Try again.');
  } 
  if (totalguess == 2) {
    alert('Last chance!');
  }
  if (totalguess == 1) {
    alert('You lost! My number is 12. No points for you here.');
  }
  totalguess= totalguess-1
  console.log('End of attempt number ' + (4 - totalguess));
}

// Array and Nested Loop Guessing Game


let genreArray=['science fiction', 'thriller', 'fantasy'];
let guesscount= 6;
let correct= false;
console.log('Start of Array Guessing Game');
console.log('genreArray');

while (correct === false && guesscount > 0) {
  let usergenre= prompt('What is my favorite book genre? You have ' + guesscount + ' attempt(s) remaining.');
  let lowercaseUsergenre= usergenre.toLowerCase();
  console.log(lowercaseUsergenre);

  for (let index=0; index < genreArray.length; index++) {
    if (lowercaseUsergenre === genreArray[index]) {
      alert('You got it! I love to read ' + genreArray[index] + '! You earned another point on your quiz.');
      correct= true;
      quizscore++
      console.log('Correct answer. Point awarded. Current point total is ' + quizscore);
      break;
    } 
  }
  if (correct === false && guesscount > 1) {
    alert('Sorry, wrong answer. Try again.');
  }
  if (correct === false && guesscount == 1) {
    alert('You lost! The possible answers were Science Fiction, Horror, and Fantasy.');
    correct= true;
    break;
  } 
  guesscount= guesscount-1
  console.log('End of attempt number ' + (6 - guesscount) + ' and the user guessed ' + usergenre);
  if (guesscount === 0) {
  console.log('User has no more tries. Game ended.');
  }
}

let goodbye = alert('Thanks for getting to know me, ' + username + '! You scored ' + quizscore + ' out of 7 possible points.' );
console.log('Goodbye statement here. Total quiz score was ' + quizscore + ' out of 7 points.');


// Stretch goal note for myself.

// Interested to learn how to make items in an array lowercase for different use.

// .tolowercase version of array string items to check against .toLowerCase variable of user string inputs Example: input = fAntAsy compared against correct answer = fantasy

// But to return an alert to the user with the original capitalization in the array (if I had capitalized them)
// Example:

// "I love to read Fantasy" using the original capitalization of the genreArray[index] versus "I love to read fAntAsy (or fantasy)" based on the usergenre and lowercaseGenre variables respectively.

// I figured out you can include the array[index] in the correct answer alert message because the index position has been matched accordingly with the user's answer to meet the condition.

// Does this make sense or is this gibberish?