 const fs = require("fs");
//   const { fs } = require("fs");
const readline = require("readline");

//  const product = {
//     name:"nameq",
//     sellingprice:"sellingpwwrice",
//     listprice:"listpricew",
//     description:"descriptionww",
//  };

//  const wtf =(product) => {
//     console.log(product)
//     let as=`Hello,${product.name} + ${product.sellingprice} + ${product.listprice} + ${product.description}`
//     as = as.toString()
//      fs.writeFile("/task1/task.txt",as,(error) =>{
//          if (error){
//              console.log("Error Occured when writting to the file" );
//          }
//      });
//  }


//  const r1 = readline.createInterface({
//      input: process.stdin,
//      output:process.stdout
//  });
// r1.question1("Enter name ",(name) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     // wtf(product);
// });
// r1.question2("Enter sellingprice",(sellingprice) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;listpricece) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     // wtf(product);
// });
// r1.question3("Enter listprice ",(listprice) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     // wtf(product);
// });

// r1.question4("Enter description",(description) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     wtf(product);
// });





// const inquirer = require('inquirer');

// const questions =const fs = require("fs");
//  const readline = require("readline");

//  const product = {
//     name:"nameq",
//     sellingprice:"sellingpwwrice",
//     listprice:"listpricew",
//     description:"descriptionww",
//  };

//  const wtf =(product) => {
//     console.log(product)
//     let as=`Hello,${product.name} + ${product.sellingprice} + ${product.listprice} + ${product.description}`
//     as = as.toString()
//      fs.writeFile("/task1/task.txt",as,(error) =>{
//          if (error){
//              console.log("Error Occured when writting to the file" );
//          }
//      });
//  }


//  consth console.log(product)
//     // wtf(product);
// });
// r1.question2("Enter sellingprice",(sellingprice) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;listpricece) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     // wtf(product);
// });
// r1.question3("Enter listprice ",(listprice) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     // wtf(product);
// });

// r1.question4("Enter description",(description) =>{
//     // console.log("data", name, sellingprice, listprice)
//     // data= this.product;
//     r1.close();
//     // console.log(product)
//     wtf(product);
// });
//     type: 'input',
//     name: 'last_name',
//     message: "What's your last name",
//   }name

// const inquirer = require('inquirer');

// const questions = [
//   {
//     type: "input",
//     name: "name ",
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });




// const wtf =(name,sellingprice,listprice,description) => {
//     fs.writeFile("task.json",`${name},${sellingprice},${listprice},${description}`,(error) =>{
//         if (error){
//             console.log("Error Occured when writting to the file" );
//         }
//     });
// const jsonData=JSON.stringify(wtf)
// console.log(jsonData)
// fs.writeFile("task.json",jsonData,(error) => {
//     console.log("done");
// });
// }




'use strict'
// const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('enterproduct name ', (answer) => {
    //   console.log(`product ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('enter sellingprice ', (answer) => {
    //   console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question('enter listprice ', (answer) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`)
        resolve()
      })
    })
  }

const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question('enter description ', (answer) => {
        // console.log(`Thank you for your valuable feedback: ${answer}`)
        resolve()
      })
    })
  }

const main = async () => {
  await question1()
  await question2()
  await question3()
  await question4()
  rl.close()
}
main()

const jsonData=JSON.stringify(main)
console.log(jsonData)
fs.writeFileSync("task.json",jsonData)



