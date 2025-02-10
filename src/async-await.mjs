import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';

const rl = createInterface(stdin, stdout);

const name = await rl.question('Input your name: ');

console.log(`Hello ${name}`);

const age = parseInt(await rl.question('Imput your age: '));

console.log(`${name} is ${age} years old.`);

let numOfMembers = 0;

while (numOfMembers <= 10) {
  numOfMembers = parseInt(await rl.question('Input your fimily number: '));

  console.log(`${name} has ${numOfMembers} members`);
}

console.log('finish');

rl.close();
