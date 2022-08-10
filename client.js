// // // const fs = require('fs');
// // // const readline = require('readline');
// // // const inquirer = require('inquirer');

// // // const console = require('console');
// // // // const table=require('jquery.tabulator');

// // // let arrayData = require('./task.json');
// // // // console.log(arrayData);

// // // console.table(arrayData);

// // // const questions = [
// // //   {
// // //     type: 'input',
// // //     name: 'name',
// // //     message: 'Which Product Do You Want To Purches ?',
// // //   },
// // //   // {
// // //   //   type: 'input',
// // //   //   name: 'sellingprice',
// // //   //   message: 'Which Product Do You Want To Purches ?',
// // //   // },
// // // ];

// // // inquirer.prompt(questions).then((answers) => {
// // //   // fs.readFile('task.json', (err, data) => {
// // //   // if (err) throw err;
// // //   let products = [];
// // //   // products = JSON.stringify(arrayData);
// // //   // console.log('product', products);
// // //   //  fs.readFile('task.json',product)
// // //   // console.log(arrayData[])
// // //   const wtf = (answers) => {
// // //     fs.writeFile(
// // //       'client.json',
// // //       `your product is: ${product.productName} and product price is: ${product.sellingprice}, \nDate:${today}`,
// // //       (error) => {
// // //         if (error) {
// // //           console.log('Error Occured when writting to the file');
// // //         }
// // //       }
// // //     );
// // //   };
// // //   // let productName, sellingprice;
// // //   // for (let x in questions) {
// // //   //   this.message = 'Do you want to add any product';
// // //   //   productName = arrayData[answers.name].name;
// // //   //   sellingprice = arrayData[answers.name].sellingprice;
// // //   // }
// // //   const product={
// // //    productName : arrayData[answers.name].name,
// // //    sellingprice : arrayData[answers.name].sellingprice,
// // //   // console.log('products', answers.name);
// // //   };

// // //   // if (answers.product == arrayData[answers.name].name) {
// // //   console.log(
// // //     `product name is ${product.productName} and product price is ${product.sellingprice}`
// // //   );
// // //   // fs.appendFileSync('client.json', '${productName},${sellingprice}');

// // //   let today = new Date();
// // //   console.log(today);
// // //   //  product.push({name:})
// // //   // }
// // //   //  });
// // //   // let jsonData = JSON.stringify(value, null, 2);
// // //   // try {
// // //   //   fs.writeFileSync('client.json', jsonData);
// // //   // } catch (err) {
// // //   //   console.log(err);
// // //   // }
// // //   // fs.writeFile("client.json",JSON.parse(), err => {
// // //   //   //     if(err) throw err;
// // //   //   //     console.log("writting done");
// // //   //   });
// // //   // fs.writeFile('client.json',, (err) => {
// // //   //   if (err) throw err;
// // //   //   console.log(
// // //   //     `product name is ${productName} and product price is ${sellingprice}`
// // //   //   );
// // //   // });
// // //   wtf(answers);
// // // });

// // // ==============================================

// // const fs = require('fs');
// // const readline = require('readline');
// // const inquirer = require('inquirer');

// // const console = require('console');
// // // const table=require('jquery.tabulator');

// // let arrayData = require('./task.json');
// // // console.log(arrayData);

// // console.table(arrayData);

// // const questions = [
// //   {
// //     type: 'input',
// //     name: 'name',
// //     message: 'Which Product Do You Want To Purches ?',
// //   },
// //   // {
// //   //   type: 'input',
// //   //   name: 'sellingprice',
// //   //   message: 'Which Product Do You Want To Purches ?',
// //   // },
// // ];

// // inquirer.prompt(questions).then((answers) => {
// //   // fs.readFile('task.json', (err, data) => {
// //   // if (err) throw err;
// //   let products = [];
// //   // products = JSON.stringify(arrayData);
// //   // console.log('product', products);
// //   //  fs.readFile('task.json',product)
// //   // console.log(arrayData[])
// //   const wtf = (answers) => {
// //     const jsondata = JSON.stringify();
// //     fs.writeFile(
// //       'client.json',
// //       `your product is: ${product.productName} and product price is: ${product.sellingprice}, \nDate:${today}`,
// //       (error) => {
// //         if (error) {
// //           console.log('Error Occured when writting to the file');
// //         }
// //       }
// //     );
// //   };
// //   // let productName, sellingprice;
// //   // for (let x in questions) {
// //   //   this.message = 'Do you want to add any product';
// //   //   productName = arrayData[answers.name].name;
// //   //   sellingprice = arrayData[answers.name].sellingprice;
// //   // }
// //   let flow = true;
// //   let arr = [];
// //   while (flow) {
// //     let product = {
// //       productName: arrayData[answers.name].name,
// //       sellingprice: arrayData[answers.name].sellingprice,
// //       // console.log('products', answers.name);
// //     };
// //     arr.push(product);
// //     // if (answers.product == arrayData[answers.name].name) {
// //     console.log(
// //       `product name is ${product.productName} and product price is ${product.sellingprice}`
// //     );
// //     // fs.appendFileSync('client.json', '${productName},${sellingprice}');

// //     let today = new Date();
// //     console.log(today);
// //     //  product.push({name:})
// //     // }
// //     //  });
// //     // let jsonData = JSON.stringify(value, null, 2);
// //     // try {
// //     //   fs.writeFileSync('client.json', jsonData);
// //     // } catch (err) {
// //     //   console.log(err);
// //     // }
// //     // fs.writeFile("client.json",JSON.parse(), err => {
// //     //   //     if(err) throw err;
// //     //   //     console.log("writting done");
// //     //   });
// //     // fs.writeFile('client.json',, (err) => {
// //     //   if (err) throw err;
// //     //   console.log(
// //     //     `product name is ${productName} and product price is ${sellingprice}`
// //     //   );
// //     // });
// //     wtf(answers);
// //   }
// // });

// const fs = require('fs');
// const readline = require('readline');
// //  const inquirer = import('inquirer');
// //  const inquirer = require('inquirer');

// const console = require('console');
// // const table=require('jquery.tabulator');

// let arrayData = require('./task.json');
// // console.log(arrayData);

// console.table(arrayData);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const askQuestions = async (questionText) => {
//   return new Promise((resolve, reject) => {
//     rl.question(questionText, function (answer) {
//       resolve(answer);
//     });
//   });
// };
// let arr = [];
// const main = async () => {
//   const username = await askQuestions('Enter your username: ');

//   const name = await askQuestions('choose product: ');

//   //   const price = await askQuestions('choose product');
//   const data = [
//     {
//       productName: arrayData[name].name,
//       producprice: arrayData[name].sellingprice,
//       today: new Date(),
//     },
//   ];
//   console.log('your product', data);
//   arr.push(data);
//   rl.close();
//   let jsonData = JSON.stringify(data, null, 2);
//   let today = new Date();
//   try {
//     fs.writeFileSync('client.json', jsonData);
//   } catch (err) {
//     console.log(err);
//   }
// };
// main();

// // const fs = require('fs');
// // const readline = require('readline');
// // const inquirer = require('inquirer');

// // const console = require('console');
// // // const table=require('jquery.tabulator');

// // let arrayData = require('./task.json');
// // // console.log(arrayData);

// // console.table(arrayData);

// // const questions = [
// //   {
// //     type: 'input',
// //     name: 'name',
// //     message: 'Which Product Do You Want To Purches ?',
// //   },
// //   // {
// //   //   type: 'input',
// //   //   name: 'sellingprice',
// //   //   message: 'Which Product Do You Want To Purches ?',
// //   // },
// // ];

// // inquirer.prompt(questions).then((answers) => {
// //   // fs.readFile('task.json', (err, data) => {
// //   // if (err) throw err;
// //   let products = [];
// //   // products = JSON.stringify(arrayData);
// //   // console.log('product', products);
// //   //  fs.readFile('task.json',product)
// //   // console.log(arrayData[])
// //   const wtf = (answers) => {
// //     fs.writeFile(
// //       'client.json',
// //       `your product is: ${product.productName} and product price is: ${product.sellingprice}, \nDate:${today}`,
// //       (error) => {
// //         if (error) {
// //           console.log('Error Occured when writting to the file');
// //         }
// //       }
// //     );
// //   };
// //   // let productName, sellingprice;
// //   // for (let x in questions) {
// //   //   this.message = 'Do you want to add any product';
// //   //   productName = arrayData[answers.name].name;
// //   //   sellingprice = arrayData[answers.name].sellingprice;
// //   // }
// //   const product={
// //    productName : arrayData[answers.name].name,
// //    sellingprice : arrayData[answers.name].sellingprice,
// //   // console.log('products', answers.name);
// //   };

// //   // if (answers.product == arrayData[answers.name].name) {
// //   console.log(
// //     `product name is ${product.productName} and product price is ${product.sellingprice}`
// //   );
// //   // fs.appendFileSync('client.json', '${productName},${sellingprice}');

// //   let today = new Date();
// //   console.log(today);
// //   //  product.push({name:})
// //   // }
// //   //  });
// //   // let jsonData = JSON.stringify(value, null, 2);
// //   // try {
// //   //   fs.writeFileSync('client.json', jsonData);
// //   // } catch (err) {
// //   //   console.log(err);
// //   // }
// //   // fs.writeFile("client.json",JSON.parse(), err => {
// //   //   //     if(err) throw err;
// //   //   //     console.log("writting done");
// //   //   });
// //   // fs.writeFile('client.json',, (err) => {
// //   //   if (err) throw err;
// //   //   console.log(
// //   //     `product name is ${productName} and product price is ${sellingprice}`
// //   //   );
// //   // });
// //   wtf(answers);
// // });

// // ==============================================

// const fs = require('fs');
// const readline = require('readline');
// const inquirer = require('inquirer');

// const console = require('console');
// // const table=require('jquery.tabulator');

// let arrayData = require('./task.json');
// // console.log(arrayData);

// console.table(arrayData);

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
//   // if (err) throw err;
//   let products = [];
//   // products = JSON.stringify(arrayData);
//   // console.log('product', products);
//   //  fs.readFile('task.json',product)
//   // console.log(arrayData[])
//   const wtf = (answers) => {
//     const jsondata = JSON.stringify();
//     fs.writeFile(
//       'client.json',
//       `your product is: ${product.productName} and product price is: ${product.sellingprice}, \nDate:${today}`,
//       (error) => {
//         if (error) {
//           console.log('Error Occured when writting to the file');
//         }
//       }
//     );
//   };
//   // let productName, sellingprice;
//   // for (let x in questions) {
//   //   this.message = 'Do you want to add any product';
//   //   productName = arrayData[answers.name].name;
//   //   sellingprice = arrayData[answers.name].sellingprice;
//   // }
//   let flow = true;
//   let arr = [];
//   while (flow) {
//     let product = {
//       productName: arrayData[answers.name].name,
//       sellingprice: arrayData[answers.name].sellingprice,
//       // console.log('products', answers.name);
//     };
//     arr.push(product);
//     // if (answers.product == arrayData[answers.name].name) {
//     console.log(
//       `product name is ${product.productName} and product price is ${product.sellingprice}`
//     );
//     // fs.appendFileSync('client.json', '${productName},${sellingprice}');

//     let today = new Date();
//     console.log(today);
//     //  product.push({name:})
//     // }
//     //  });
//     // let jsonData = JSON.stringify(value, null, 2);
//     // try {
//     //   fs.writeFileSync('client.json', jsonData);
//     // } catch (err) {
//     //   console.log(err);
//     // }
//     // fs.writeFile("client.json",JSON.parse(), err => {
//     //   //     if(err) throw err;
//     //   //     console.log("writting done");
//     //   });
//     // fs.writeFile('client.json',, (err) => {
//     //   if (err) throw err;
//     //   console.log(
//     //     `product name is ${productName} and product price is ${sellingprice}`
//     //   );
//     // });
//     wtf(answers);
//   }
// });

const fs = require('fs');
const readline = require('readline');
//  const inquirer = import('inquirer');
//  const inquirer = require('inquirer');
const prompt = require('prompt');
const console = require('console');
// const table=require('jquery.tabulator');

let arrayData = require('./task.json');
// console.log(arrayData);

console.table(arrayData);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestions = async (questionText) => {
  return new Promise((resolve, reject) => {
    rl.question(questionText, function (answer) {
      resolve(answer);
    });
  });
};
let arr = [];
const main = async () => {
  const username = await askQuestions('Enter your username: ');
  // try {
  //   await User.create({
  //     username,
  //   }).then((user) =>
  //     client.json({
  //       message: 'User successfully created',
  //       user,
  //     })
  //   );
  // } catch (err) {
  //   client.json({
  //     message: 'User not successful created',
  //     error: error.mesage,
  //   });
  // }

  prompt.start();

  prompt.get(username, function (err, result) {
    if (err) {
      return onErr(err);
    }
    console.log('Command-line input received:');
    console.log('  Username: ' + username);
  });

  // function onErr(err) {
  //   console.log(err);
  //   return 1;
  // }

  const name = await askQuestions('choose product: ');

  //   const price = await askQuestions('choose product');
  const data = [
    {
      productName: arrayData[name].name,
      producprice: arrayData[name].sellingprice,
      today: new Date(),
    },
  ];
  console.log('your product', data);
  arr.push(data);
  rl.close();
  let jsonData = JSON.stringify(data, null, 2);
  let today = new Date();
  try {
    fs.writeFileSync('client.json', jsonData);
  } catch (err) {
    console.log(err);
  }
};
main();
