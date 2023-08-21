const getNthElement = (index, array) => {
  // your code here
  if (index < array.length) {
    return array[index];
  }
  return array[index - array.length];
  // return array.slice(index, 0); this fails but look into it later
};

const arrayToCSVString = array => {
  // your code here
  return array.join(',');
};

const csvStringToArray = string => {
  // your code here
  return string.split(',');
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  const newArray = [...array, element]; // spread operator
  return newArray;
};

const removeNthElement = (index, array) => {
  // your code here
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  // your code here
  numbers.toString();
  return numbers.map(num => num.toString());
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(word => word.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(word =>
    word
      .split('')
      .reverse()
      .join(''),
  );
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  // your code here
  // return array.slice(index, 0);
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const elementsStartingWithAVowel = strings => {
  // your code here
  // return strings.filter(element => /^[aeiou]/i.test(element));
  return strings.filter(e => e.match(/^[aeiou]/gi));
};

const removeSpaces = string => {
  // your code here
  // return string.map(element => element.replace(/\s/g, '')); fails
  // return string.replace(/\s/g, ''); passes
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((acc, num) => acc + num, 0);
};

const sortByLastLetter = strings => {
  // your code here
  // return strings.reverse().sort();
  // const newWords = strings.map(word =>
  //   word
  //     .split('')
  //     .reverse()
  //     .join('')
  // );
  // return newWords.sort().map(sortedWord => sortedWord.split(' '));

  const reverseString = item =>
    item
      .split('')
      .reverse()
      .join('');

  return strings
    .map(reverseString)
    .sort()
    .map(reverseString);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
