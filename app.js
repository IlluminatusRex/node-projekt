const os = require('os');
const fs = require('fs');

//console.log('Platform: ', os.platform());
//console.log('Arch: ', os.arch());
//console.log('User: ', os.userInfo().username);

const genders = ['Male', 'Female'];
const maleNames = ['Tom', 'Ron', 'Mark', 'Rob', 'Dark' ];
const femaleNames = ['Ana', 'Agn', 'Sarah', 'Silvia' ]; 
const lastNames = ['Tomson', 'Brown', 'Longmore', 'Welsh', 'Cameron'];
const people = [];

function randChoice (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

for (let i = 0; i < 20; i++) {
    const person = {};
    person.gender = randChoice(genders);
    if (person.gender == 'Male'){
        person.name = randChoice(maleNames)
        person.lastName = randChoice(lastNames)
        person.age = Math.floor(Math.random() * 100)
    } else {
        person.name = randChoice(femaleNames)
        person.lastName = randChoice(lastNames)
        person.age = Math.floor(Math.random() * 100)
    }
    people.push(person);
  }

console.log('People: ', people);

const jsonString = JSON.stringify(people);

fs.writeFile('people.json', jsonString, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
