/* eslint-disable prettier/prettier */
const createPerson = (name, age) => {
  // your code here
  return { name, age };
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  if (object[property]) {
    // later check this out
    return true;
  }
  return false;
};

const isOver65 = person => {
  // your code here
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  // your code here
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  // your code here
  return people.find(person => person.name === name); // note here
};

const findHondas = cars => {
  // your code here
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  // your code here
  const sum = people.reduce((total, person) => total + person.age, 0);
  return sum / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name,
    age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson,
};
