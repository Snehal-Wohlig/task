const fs = require("fs");
const readline = require("readline");

const productData= {
    name:"",
    sellingprice:"",
    listprice:"",
    description:"",
}

const jsonData= JSON.stringify(productData);
fs.writeFileSync("task0.json",jsonData,(err) => {
    console.log("done");
})

// const wtf =(name,sellingprice,listprice,description) => {
//     fs.writeFile("task.txt",`${name},${sellingprice},${listprice},${description}`,(error) =>{
//         if (error){
//             console.log("Error Occured when writting to the file" );
//         }
//     });
// }

const r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

r1.question("productname,sellingprice,listprice,description",(name,sellingprice,listprice,description) =>{
    r1.close();
    wtf(name,sellingprice,listprice,description);
});