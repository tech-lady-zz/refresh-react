// Object Destructuring

const person = {
  name: 'Chris',
  twitter: '@christo'
};

// const name = person.name;
// const twitter = person.twitter;
//create name, twitter varibles and pull out of persons.
const{ name, twitter } = person;
console.log(name, twitter);

import {render} from 'react-dom';
render()
ReactDOM.render()


// Array Destructuring

const people = ['chris', 'christo'];
// const person1 = people[0];
// const person2 = people[1];
// for large data:
/*
  An array can have series of objects but each array can be represented 
  by its position when data needs to be pullled out.
*/
// const [person1, person2] = people;
const [chris, christo] = people;

// console.log(person1, person2);
console.log(chris, christo);