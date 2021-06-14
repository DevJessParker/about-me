'use strict';

let quizscore = 0

let username = prompt('Hello! It looks like you want to learn more about me. But first, what is your name?');


function Q1(){
  let joke = prompt('Welcome, ' + username + '! Would you like to take a quiz? Please answer yes or no.')
  let lowercaseJoke = joke.toLowerCase();


  if (lowercaseJoke === 'yes' || lowercaseJoke === 'y') {
    alert('Trick question. You don\'t have a choice.');
  } else if (lowercaseJoke === 'no' || lowercaseJoke === 'no') {
    alert('Too bad. You have to.');
  } else {
    alert('I did\'t understand your answer. Looks like you get to take a quiz now. You\'re welcome, ' + username + '.');
  }
} 

function Q2(){
  let likereading = prompt('There are 7 possible points on this quiz. For the following questions, please answer yes or no. Do I like to read, ' + username + '?');
  let lowercaseLikereading = likereading.toLowerCase();
  
  if (lowercaseLikereading === 'yes' || lowercaseLikereading === 'y') {
    alert('Correct! I love to read.');
    quizscore++
  } else if (lowercaseLikereading === 'no' || lowercaseLikereading === 'n') {
    alert('You have choosen poorly. I love to read.');
  } else {
    alert('This input is not valid for the question. No points for you.');
  }
}

function Q3(){
  let college = prompt('Have I been to college?');
  let lowercaseCollege = college.toLowerCase();

  if (lowercaseCollege === 'yes' || lowercaseCollege === 'y') {
    alert('You\'re on a roll! I graduated from university in 2010.');
    quizscore++
  } else if (lowercaseCollege === 'no' || lowercaseCollege === 'n') {
    alert('Darn. Wrong answer. I graduated from university in 2010.');
  } else {
    alert('Invalid response. Pay attention to the questions, ' + username + '.');
  }
}

function Q4(){
  let hawaii = prompt('Have I ever lived in Hawaii?');
  let lowercaseHawaii = hawaii.toLowerCase();

  if (lowercaseHawaii === 'yes' || lowercaseHawaii === 'y') {
    alert('You got it right! I lived in Hawaii when I was much younger.');
    quizscore++
  } else if (lowercaseHawaii === 'no' || lowercaseHawaii === 'n') {
    alert('Oh no! Wrong answer. I lived there when I was very young.');
  } else {
    alert('Please stop confusing me.');
  }
}

function Q5(){
  let hamburgers = prompt('Do I love hamburgers?');
  let lowercaseHamburgers = hamburgers.toLowerCase();

  if (lowercaseHamburgers === 'yes' || lowercaseHamburgers === 'y') {
    alert('Gross! No, I hate hamburgers.');
  } else if (lowercaseHamburgers === 'no' || lowercaseHamburgers === 'n') {
    alert('Spot on! Hamburgers are gross.');
    quizscore++
  } else {
    alert('Please stop breaking my booleans.')
  }
}


function Q6(){
  let homework = prompt('Did I write my coding homework correctly the very first time?');
  let lowercaseHomework = homework.toLowerCase();

  if (lowercaseHomework === 'yes' || lowercaseHomework === 'y') {
    alert('Good guess, but literally zero students wrote correct code the first time.');
  } else if (lowercaseHomework === 'no' || lowercaseHomework === 'n') {
    alert('Are you honestly surprised? Of course I didn\'t! Point for you.');
    quizscore++
  } else {
    alert('Invalid response. Skynet is angry.');
  }
}

function Q7(){
  let correctanswer = 12
  let totalguess = 4

  for (let guessnum= 0;  guessnum < 4; guessnum++){
    let userguess = prompt('I\'m thinking of a number between 1 - 50. Can you guess my number? You have ' + totalguess + ' attempts(s) remaining');
    
    if (userguess == correctanswer) {
      alert('Correct! My number is 12.');
      quizscore++
      break;
    } else if ((userguess <= 0 || userguess >= 51) &&  totalguess > 1) {
      alert('Error. Your number is outside the range. Please enter a valid number.')
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
  }
}

function Q8(){
  let genreArray=['science fiction', 'thriller', 'fantasy'];
  let guesscount= 6;
  let correct= false;

  while (correct === false && guesscount > 0) {
    let usergenre= prompt('What is my favorite book genre? You have ' + guesscount + ' attempt(s) remaining.');
    let lowercaseUsergenre= usergenre.toLowerCase();

    for (let index=0; index < genreArray.length; index++) {
      if (lowercaseUsergenre === genreArray[index]) {
        alert('You got it! I love to read ' + genreArray[index] + '! You earned another point on your quiz.');
        correct= true;
        quizscore++
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
  }
}

Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();
Q8();


let goodbye = alert('Thanks for getting to know me, ' + username + '! You scored ' + quizscore + ' out of 7 possible points.' );


function randomNum() {

  let numGen = Math.floor(Math.random()*16777215).toString(16);
  return [numGen];

}

function shuffleColor3() {
    
  document.getElementById('s1').style.backgroundColor = "#" + randomNum();
  document.getElementById('s2').style.backgroundColor = "#" + randomNum();
  document.getElementById('s3').style.backgroundColor = "#" + randomNum();
  document.getElementById('s4').style.backgroundColor = "#" + randomNum();
  document.getElementById('s5').style.backgroundColor = "#" + randomNum();

}

