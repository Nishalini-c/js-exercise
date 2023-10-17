//day02

var challenge = 'learn JavaScript';
console.log(challenge);
console.log(challenge.length);
var capitalChallenge = challenge.toUpperCase();
console.log(capitalChallenge);
var lowercaseChallenge = challenge.toLowerCase(); // Convert to lowercase
console.log(lowercaseChallenge);
var firstWord = challenge.substring(0, challenge.indexOf(' ')); // Cut out the first word
console.log(firstWord);

var text = 'learn JavaScript';
var slicedText = text.substring(0, text.indexOf(' ')) + ' Days Of JavaScript';
console.log(slicedText);

var containsScript = text.includes('Script');
if (containsScript) {
  console.log('The string contains the word "Script".');
} else {
  console.log('The string does not contain the word "Script".');
}

var wordsArray = text.split(' ');
console.log(wordsArray);

var companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
var companiesArray = companiesString.split(', ');

console.log(companiesArray);

var text = 'learning JavaScript';
var newText = text.replace('learning JavaScript', '30 Days of Python');
console.log(newText);

var characterAtIndex15 = text.charAt(15);
console.log(characterAtIndex15);

var charCodeOfJ = text.charCodeAt(6); // 'J' is at index 6
console.log(charCodeOfJ);


var lastIndexOfA = text.lastIndexOf('a');
console.log('The last occurrence of "a" is at position:', lastIndexOfA);

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var indexOfBecause = sentence.indexOf('because');
console.log('The first occurrence of "because" is at position:', indexOfBecause);

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var lastIndexOfBecause = sentence.lastIndexOf('because');
console.log('The last occurrence of "because" is at position:', lastIndexOfBecause);

var sentence = 'You cannot end a sentence with because because because is a conjunction';
var positionOfBecause = sentence.search('because');
console.log('The first occurrence of "because" is at position:', positionOfBecause);

var text = ' learn Javascript ';
var trimmedText = text.trim();
console.log(trimmedText);

var text = 'learn Javascript';
var startsWithLearn = text.startsWith('learn');
console.log(startsWithLearn); // true

var endsWithJavascript = text.endsWith('Javascript');
console.log(endsWithJavascript); // true


var matches = text.match(/a/g);
console.log(matches);

var firstPart = '30 Days of ';
var secondPart = 'JavaScript';
var mergedString = firstPart.concat(secondPart);
console.log(mergedString);

var text = 'learn Javascript';
var repeatedText = text.repeat(2);
console.log(repeatedText);





