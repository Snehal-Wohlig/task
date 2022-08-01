const fs = require("fs");
const readline = require("readline");

const data = JSON.parse(fs.readFileSync("task0.json"));

// const saveData=(data,file)=>{
//   const finished =(error) =>{
//     if(error){
//       console.error(error)
//       return;
//     }
//   }

//   const jsonData =JSON.stringify(data,null,2)
//   fs.writeFile(file,jsonData,finished)
//   console.log("saved")
// }

const productData= {
    name: " ",
    sellingprice: " ",
    listprice: " ",
    description: " ",
};

// const saveProduct =(product) => {
//     const newProduct= {
//         name: productData.name,
//         sellingprice: productData.sellingprice,
//         listprice: productData.listprice,
//         description: productData.description 
//     }

//     data[productData.name]= newProduct
//     saveData(data,"task0.json")
// }
// saveProduct(productData)

// const wtf =(name,sellingprice,listprice,description) => {
//     fs.writeFile("task.txt",`${name},${sellingprice},${listprice},${description}`,(error) =>{
//         if (error){
//             console.log("Error Occured when writting to the file" );
//         }
//     });
// }
// const jsonData= JSON.stringify(wtf);


//  const wtf =(productData) => {
//      fs.writeFile("task.txt",`${productData.name},${productData.sellingprice},${productData.listprice},${productData.description}`,(error) =>{
//          if (error){
//              console.log("Error Occured when writting to the file" );
//          }
//      });
//  }


// const users = require("./task0");

// const productData= [{
//     name: " ",
//     sellingprice: " ",
//     listprice: " ",
//     description: " "
// }];

//  users.push(productData);

// fs.writeFile("task0.json",JSON.stringify(users), err => {
//     if(err) throw err;
//     console.log("writting done");
// });

const r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.question("productname,sellingprice,listprice,description",(name) =>{
    r1.close();
    console.log(name)
    name = name.split(" ")
    productData.name = name[0]
    productData.sellingprice = name[1]
    productData.listprice = name[2]
    productData.description = name[3]
    const jsonData= JSON.stringify(productData);
fs.writeFileSync("task0.json",jsonData,(err) => {
    console.log("done");
}); 
  
    // wtf(name,sellingprice,listprice,description);
    const saveData=(data,file)=>{
      const finished =(error) =>{
        if(error){
          console.error(error)
          return;
        }
      }
    
      const jsonData =JSON.stringify(data,null,2)
      fs.writeFile(file,jsonData,finished)
      console.log("saved")
    }
    
    const saveProduct =(product) => {
      const newProduct= {
          name: productData.name,
          sellingprice: productData.sellingprice,
          listprice: productData.listprice,
          description: productData.description 
      }
      
      data[productData]= newProduct
      saveData(data,"task0.json")
      }
  
      saveProduct(productData)

});
  

