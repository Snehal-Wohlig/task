//  const { default: async, reject } = require("async");
// const fs = require("fs");
// //   const { fs } = require("fs");
// const readline = require("readline");

// 'use strict'
// // const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
// const askQuestions = async (questionText) => {
//   return new Promise((resolve, reject) => {
//     rl.question(questionText, function (answer) {
//       resolve(answer)
//     })
//   })
// }

// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('enterproduct name ', (answer) => {
//     //   console.log(`product ${answer}`)
//       resolve()
//     })
//   })
// }

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('enter sellingprice ', (answer) => {
//     //   console.log(`Thank you for your valuable feedback: ${answer}`)
//       resolve()
//     })
//   })
// }

// const question3 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('enter listprice ', (answer) => {
//         // console.log(`Thank you for your valuable feedback: ${answer}`)
//         resolve()
//       })
//     })
//   }

// const question4 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('enter description ', (answer) => {
//         // console.log(`Thank you for your valuable feedback: ${answer}`)
//         resolve()
//       })
//     })
//   }

// const main = async () => {
//   // await question1()
//   // await question2()
//   // await question3()
//   // await question4()
//   const name = await askQuestions("what is product name")
//   const sellingprice = await askQuestions("Enter the selling price")
//   const listPrice = await askQuestions("Enter the listPrice")
//   const description = await askQuestions("Enter the description")

//   console.log("your product", name)
//   rl.close()
//   return {
//     name, sellingprice, listPrice,description
//   }
// }
// main().then(data => {
//   const jsonData=JSON.stringify(data);
//   console.log(jsonData);
//   fs.writeFileSync("task.json",jsonData);

// }).catch(error => console.log(error))

// const fs = require('fs');
// //   const { fs } = require("fs");
// const readline = require('readline');

// ('use strict');
// // const readline = require('readline')

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

// // const question1 = () => {
// //   return new Promise((resolve, reject) => {
// //     rl.question('enterproduct name ', (answer) => {
// //     //   console.log(`product ${answer}`)
// //       resolve()
// //     })
// //   })
// // }

// // const question2 = () => {
// //   return new Promise((resolve, reject) => {
// //     rl.question('enter sellingprice ', (answer) => {
// //     //   console.log(`Thank you for your valuable feedback: ${answer}`)
// //       resolve()
// //     })
// //   })
// // }

// // const question3 = () => {
// //     return new Promise((resolve, reject) => {
// //       rl.question('enter listprice ', (answer) => {
// //         // console.log(`Thank you for your valuable feedback: ${answer}`)
// //         resolve()
// //       })
// //     })
// //   }

// // const question4 = () => {
// //     return new Promise((resolve, reject) => {
// //       rl.question('enter description ', (answer) => {
// //         // console.log(`Thank you for your valuable feedback: ${answer}`)
// //         resolve()
// //       })
// //     })
// //   }

// const main = async () => {
//   // await question1()
//   // await question2()
//   // await question3()
//   // await question4()
//   let flow = true;
//   while (flow) {
//     const name = await askQuestions('what is product name');
//     const sellingprice = await askQuestions('Enter the selling price');
//     const listPrice = await askQuestions('Enter the listPrice');
//     const description = await askQuestions('Enter the description');

//     console.log('your product', name);
//     // rl.close();
//     const data = {
//       name,
//       sellingprice,
//       listPrice,
//       description,
//     };
//     let jsonData = JSON.stringify(data);
//     jsonData = jsonData + '\n';
//     console.log(jsonData);
//     fs.appendFileSync('task.json', jsonData);
//     const prompt = await askQuestions('Do You Want To Continue');
//     if (prompt == 'no') {
//       rl.close();
//       flow = false;
//     }
//   }
// };

// main();

const fs = require('fs');
//   const { fs } = require("fs");
const readline = require('readline');

('use strict');
// const readline = require('readline')

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

// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('enterproduct name ', (answer) => {
//     //   console.log(`product ${answer}`)
//       resolve()
//     })
//   })
// }

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('enter sellingprice ', (answer) => {
//     //   console.log(`Thank you for your valuable feedback: ${answer}`)
//       resolve()
//     })
//   })
// }

// const question3 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('enter listprice ', (answer) => {
//         // console.log(`Thank you for your valuable feedback: ${answer}`)
//         resolve()
//       })
//     })
//   }

// const question4 = () => {
//     return new Promise((resolve, reject) => {
//       rl.question('enter description ', (answer) => {
//         // console.log(`Thank you for your valuable feedback: ${answer}`)
//         resolve()
//       })
//     })
//   }

const main = async () => {
  // await question1()
  // await question2()
  // await question3()
  // await question4()
  let flow = true;
  let arrayData = [];
  while (flow) {
    const name = await askQuestions('what is product name');
    const sellingprice = await askQuestions('Enter the selling price');
    const listPrice = await askQuestions('Enter the listPrice');
    const description = await askQuestions('Enter the description');

    console.log('your product', name);
    // rl.close();
    // let arrayData = [];
    const data = {
      name,
      sellingprice,
      listPrice,
      description,
    };

    arrayData.push(data);
    let jsonData = JSON.stringify(data);
    jsonData = jsonData + '\n';
    console.log(jsonData);
    fs.appendFileSync('task.json', jsonData);
    const prompt = await askQuestions('Do You Want To Continue');
    if (prompt == 'no') {
      rl.close();
      flow = false;
      console.log(arrayData);
      // console.log('result----', arrayData);
      // const map1 = arrayData.map((x) => {
      //   console.log(x);
      // });
    }
  }
};

main();
