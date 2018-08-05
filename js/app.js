'use strict';


alert('Please type Yes, Y, No or N to answer the following questions');


var answerFirst = prompt('Elijahs favorite car is the Toyota Supra?').toLowerCase();

if (answerFirst === 'yes' || answerFirst === 'y' || answerFirst === 'no' || answerFirst === 'n'){
  console.log('User replied to the first question with: ' + answerFirst);
} else if (answerFirst !== 'yes' || answerFirst !== 'y' || answerFirst !== 'no' || answerFirst !== 'n'){
  alert('Please use Yes, Y, No or N to answer the rest of the questions');
}
if (answerFirst === 'yes' || answerFirst === 'y'){
  alert('Unfortunatley that was incorrect. Better luck next time!');
}
if (answerFirst === 'no' || answerFirst === 'n'){
  alert('Great job! His favorite is the RX-7 of course!');
}


var answerSecond = prompt('Elijahs favorite mountain bike is the Santa Cruz Nomad').toLowerCase();

if (answerSecond === 'yes' || answerSecond === 'y' || answerSecond === 'no' || answerSecond === 'n'){
  console.log('User replied to the first question with: ' + answerSecond);
} else if (answerSecond !== 'yes' || answerSecond !== 'y' || answerSecond !== 'no' || answerSecond !== 'n') {
  alert('Please use Yes, Y, No or N to answer the rest of the questions');
}
if (answerSecond === 'yes' || answerSecond === 'y'){
  alert('Great job! His favorite is the Nomad!');
}
if (answerSecond === 'no' || answerSecond === 'n'){
  alert('Unfortunatley that was incorrect. Better luck next time!');
}


var answerThird = prompt('Elijahs favorite candy is lifesavers Wint-O-Green mints').toLowerCase();

if (answerThird === 'yes' || answerThird === 'y' || answerThird === 'no' || answerThird === 'n'){
  console.log('User replied to the first question with: ' + answerThird);
} else if (answerThird !== 'yes' || answerThird !== 'y' || answerThird !== 'no' || answerThird !== 'n') {
  alert('Please use Yes, Y, No or N to answer the rest of the questions');
}
if (answerThird === 'yes' || answerThird === 'y'){
  alert('Great job! His favorite Wint-o-Green!');
}
if (answerThird === 'no' || answerThird === 'n'){
  alert('Unfortunatley that was incorrect. Better luck next time!');
}


var answerFourth = prompt('Elijahs favorite City is Portland Oregon').toLowerCase();

if (answerFourth === 'yes' || answerFourth === 'y' || answerFourth === 'no' || answerFourth === 'n'){
  console.log('User replied to the first question with: ' + answerFourth);
} else if (answerFourth !== 'yes' || answerFourth !== 'y' || answerFourth !== 'no' || answerFourth !== 'n') {
  alert('Please use Yes, Y, No or N to answer the rest of the questions');
}
if (answerFourth === 'yes' || answerFourth === 'y'){
  alert('Unfortunatley that was incorrect. Better luck next time!');
}
if (answerFourth === 'no' || answerFourth === 'n'){
  alert('Great job! His favorite city is Seattle!');
}


var answerFifth = prompt('Elijahs favorite animal is the Snow Leopard').toLowerCase();

if (answerFifth === 'yes' || answerFifth === 'y' || answerFifth === 'no' || answerFifth === 'n'){
  console.log('User replied to the first question with: ' + answerFifth);
} else if (answerFifth !== 'yes' || answerFifth !== 'y' || answerFifth !== 'no' || answerFifth !== 'n') {
  alert('Please use Yes, Y, No or N to answer the rest of the questions');
}
if (answerFifth === 'yes' || answerFifth === 'y'){
  alert('Great job! His favorite animal is the Snow Leopard');
}
if (answerFifth === 'no' || answerFifth === 'n'){
  alert('Unfortunatley that was incorrect. Better luck next time!');

}

