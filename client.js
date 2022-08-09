const fs = require('fs');
const readline = require('readline');
const inquirer = require('inquirer');

const console = require('console');
// const table=require('jquery.tabulator');

let arrayData = require('./task.json');
// console.log(arrayData);

// var products = [];

// const wtf = (name) => {
//   fs.writeFile('task0.txt', `your product name:${name}`, (error) => {
//     if (error) {
//       console.log('Error Occured when writting to the file');
//     }
//   });
// };

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question('Which Product Do You Want To Purches ?', (name) => {

//   console.log(name);
//   try {
//     if (arrayData.name === this.name) {
//       console.log(this.arrayData.name, this.arrayData.sellingprice);
//     }
//   } catch (err) {
//     console.log(err);
//   }
//   r1.close();
//   wtf(name);
// });

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: 'Which Product Do You Want To Purches ?',
//   },
//   // {
//   //   type: 'input',
//   //   name: 'sellingprice',
//   //   message: 'Which Product Do You Want To Purches ?',
//   // },
// ];

// inquirer.prompt(questions).then((answers) => {
//   // fs.readFile('task.json', (err, data) => {
//   //   if (err) throw err;
//   products = JSON.stringify(arrayData);
//   // console.log('product', products);
//    fs.readFile('task.json',product)

//   if (answers.product == products[0].name) {
//     console.log(
//       `product name is ${answers.name} and ${products[0].sellingprice}`
//     );
//   }
//   //  });
// });

// function readJsonFile(arrayData) {
//   let bufferData = fs.readFileSync(arrayData);
//   let stData = bufferData.toString();
//   let data = JSON.parse(stData);
//   return data;
// }

// let config;

// config = {
//   border: table.getBorderCharacters('ramac'),
// };

// let x = table.table(arrayData, config);
// console.log(x);
// console.log('product', JSON.stringify(x));

// for (var i = 0, len = arrayData.length; i < length; i++) {
//   var temp = '<tr><td>' + arrayData[i].id + '</td>';
//   temp += '<td>' + data[i].name + '</td>';
//   temp += '<td>' + data[i].sellingprice + '</td>';
//   temp += '<td>' + data[i].lisrprice + '</td></tr>';
//   temp += '<td>' + data[i].description + '</td></tr>';
//   $('table tbody').append(temp);
// }

// jsonObject = arrayData; // consider the above mention object here.
// keys = arrayData.keys(arrayData[0]);

// jObject jo = jObject.Parse(json);
// List<Row> rows = jo["arrayData"]
//     .Children<JArray>()
//     .Select(ja => new Row
//     {
//         ColumnName1 = (string)ja[0],
//         ColumnName2 = (string)ja[1],
//         ColumnName3 = (int)ja[2]
//     })
//     .ToList();

// table.setData(arrayData)
//   .then(function () {
//     //run code after table has been successfully updated
//   })
//   .catch(function (error) {
//     //handle error loading data
//   });

// var tables = new Tabulator('#example-table', {
//   data: arrayData, //set initial table data
//   columns: [
//     { title: 'Name', field: 'name' },
//     { title: 'Price', field: 'sellingprice' },
//     { title: 'listprice', field: 'listprice' },
//     { title: 'Description', field: 'description' },
//   ],
// });

// $('#example-table').tabulator('setData', arrayData);

// $(".example-table").tabulator({
//   columns : [ {
//       title : "ID",
//       field : "firstname",//changed here
//       width : 250
//   }, {
//       title : "Pred",
//       field : "pred",//and here
//       sorter : "number",
//       align : "left",
//       formatter : "progress",
//       width : 200
//   }, ],
// });

console.table(arrayData);

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Which Product Do You Want To Purches ?',
  },
  // {
  //   type: 'input',
  //   name: 'sellingprice',
  //   message: 'Which Product Do You Want To Purches ?',
  // },
];

inquirer.prompt(questions).then((answers) => {
  // fs.readFile('task.json', (err, data) => {
  // if (err) throw err;
  let products = [];
  // products = JSON.stringify(arrayData);
  // console.log('product', products);
  //  fs.readFile('task.json',product)
  // console.log(arrayData[])
  console.log('answersanswersanswersanswers', answers.name);
  // if (answers.product == arrayData[answers.name].name) {
  console.log(
    `product name is ${arrayData[answers.name].name} and ${
      arrayData[answers.name].sellingprice
    }`
  );
  //  product.push({name:})
  // }
  //  });
});
