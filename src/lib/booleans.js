function negate(a) {
  // your code here
  return !a;
}

function both(a, b) {
  // your code here
  return a && b;
}

function either(a, b) {
  // your code here
  return a || b;
}

function none(a, b) {
  // your code here
  // return !(a && b); // gives: false
  return !a && !b;
}

function one(a, b) {
  // your code here
  return (a && !b) || (!a && b);
}

function truthiness(a) {
  // your code here
  if (a) {
    return true;
  }
  return false;
}

function isEqual(a, b) {
  // your code here
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  // your code here
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  // your code here
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  // your code here
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  // your code here

  // if (a === 0 || Math.sqrt(a) % 2 !== 0)
  // typeof Math.sqrt(a) === 'number' || a >= 0
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  // your code here
  // if (string[0] === char) {
  //   return true;
  // }
  // return false;
  if (string.startsWith(char)) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  // your code here
  if (/[aeiou]/i.test(string)) {
    return true;
  }
  return false;
}

function isLowerCase(string) {
  // your code here
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
