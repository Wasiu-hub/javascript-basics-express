function sayHello(string) {
  // your code here
  return `Hello, ${string}!`;

  // return 'Hello, ' + string + '!';
}

function uppercase(string) {
  // your code here
  return string.toUpperCase();
}

function lowercase(string) {
  // your code here
  return string.toLowerCase();
}

function countCharacters(string) {
  // your code here
  return string.length;
}

function firstCharacter(string) {
  // your code here
  return string[0];
}

function firstCharacters(string, n) {
  // your code here
  // let result = '';
  // for (let i = 0; i < n; i++) {
  //   result += string[i];
  // }
  // return result;
  return string.slice(0, n);
}

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
};
