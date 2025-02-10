import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';

const rl = createInterface(stdin, stdout);

rl.question('Input your name: ').then((name) => {
  console.log(`Hello ${name}`);

  rl.question('Imput your age: ').then((ageText) => {
    const age = parseInt(ageText);

    console.log(`${name} is ${age} years old.`);

    const recqFn = () =>
      rl.question('Input your fimily number: ').then((numOfMembersText) => {
        const numOfMembers = parseInt(numOfMembersText);

        console.log(`${name} has ${numOfMembers} members`);

        if (numOfMembers <= 10) {
          recqFn();
        } else {
          rl.close();
        }
      });

    recqFn();
  });
});

console.log('finish');
