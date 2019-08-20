'use strict';

//var haveKids = prompt('Do I have any children?');
// likesGameOfThrones = likesGameOfThrones.toLowerCase();

// if(haveKids.toUpperCase() === 'YES' || haveKids.toUpperCase() === 'Y'){
//   alert('YES!! I have 5 children and 2 stepchildren');
// } else {
//   alert('I wonder what my life would be like without my kids?');
// } console.log(haveKids);

// var haveGrandkids = prompt('Do I have any grandkids?');

// if(haveGrandkids.toUpperCase() === 'YES' || haveGrandkids.toUpperCase() === 'Y'){
//   alert('I have 5 grandchildren. 3 granddaughters and 2 grandsons.');
// } else {
//   alert('Maybe I am older than I look?');
// } console.log(haveGrandkids);

// var careerChange = prompt('Coding is a career change from the Army. Did I retire?');

// if(careerChange.toUpperCase() === 'Yes' || careerChange.toUpperCase() === 'Y') {
//   alert('You know me better than I thought.');
// } else {
//   alert('I retired after serving 1992-2012');
// } console.log(careerChange);

// var leisureTime = prompt('Do I fish?');

// if(leisureTime.toUpperCase() === 'YES' || leisureTime.toUpperCase() === 'Y'){
//   alert('Even when I don\'t get a bite my time on the water is the best.');
// } else {
//   alert('I don\'t catch, but I do fish.');
// } console.log(leisureTime);

// var likesGameOfThrones = prompt('Do I like Game Of Thrones?');

// if(likesGameOfThrones.toUpperCase() === 'YES' || likesGameOfThrones.toUpperCase() === 'Y'){
//   alert('Trick question. I have only seen the first episode.');
// } else {
//   alert('Trick question. I have only seen the first episode.');
// } console.log(likesGameOfThrones);

//6th Question

var mypcsMoves = 7;

for(var i = 0; i < 4; i++){
  var pcsMoves = prompt('In my military service, I was assigned to many different bases. Can you guess how many?');
  pcsMoves = parseInt(pcsMoves);
  if(pcsMoves === mypcsMoves){
    alert('You got it!');
    break;
  } else if (i === 3){
    alert('I\'ve been assigned to Forts Drum, Hood, Bragg, Gordon, Lee, Lewis, and Camp Garryowen.');
  
  } else if (pcsMoves < mypcsMoves) {
    alert('Too low.');
  } else {
    alert('Like Seth Rogen, You\'re Too high')
  }
} console.log(pcsMoves);

//7th Question

var statesIlivedin = ['Illinois', 'California', 'Utah', 'New York', 'Texas', 'North Carolina', 'Georgia', 'Virginia', 'Washington'];
var userScore = 0;
//var userScore = parseInt(userScore);
// outer for loop keeps track of the number of guesses
for (var j = 0; j < 3; j++) {
  var userStateGuess = prompt('Can you guess three states that I have lived in?');

  // normalizing the data
  userStateGuess = userStateGuess.toLowerCase();
  var isCorrect = false;

  // inner for loop is keeping track of cities
  for (var k = 0; k < statesIlivedin.length; k++) {
    if (userStateGuess === statesIlivedin[k]) {
      isCorrect = true;
    }
  }

  // if(condition is true){
    //do the thing
  // }
  if (isCorrect) {
    alert('You got it!');
    userScore++;
    break;
  }
  else {
    alert('Lets try it again');
  }
}
alert('You score is: ' + userScore + ' out of 9');

// if(condition is met){
//   do something
// } else if(a differnt condition is met){
//   do something else
// } else {
//   do something else
// }
