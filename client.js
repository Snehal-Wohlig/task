const arrayData = require('./task.json');
console.log(arrayData);

const fs = require('fs');
const readline = require('readline');

const wtf = (name) => {
  fs.writeFile('task0.txt', `your product name:${name}`, (error) => {
    if (error) {
      console.log('Error Occured when writting to the file');
    }
  });
};

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Which Product Do You Want To Purches ?', (name) => {
    let value=name
  console.log(name);
  try {
    if (arrayData.name === this.name) {
      console.log(this.arrayData.name, this.arrayData.sellingprice);
    }
  } catch (err) {
    console.log(err);
  }
  r1.close();
  wtf(name);
});
