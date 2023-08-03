// console.log("sub");
// var a=20;
// var b=30;
// var c=40;
// console.warn(a+b+c);

// var x=20;  
// var x='20'     //after using this result not coming
// if(x===20){
//     console.log("matched")
// }


// for(i=0;i<=10;i++)//for loop in node js
// {
//     console.log(i);
// }


// var x='20'
// const arr=[2,4,7,1,3,8,3];  //array in node js
// console.log(arr[0])


//use functions from another file app.js are as follows=
// const app = require('./app')
// const arr=[2,4,7,1,3,4,6];
// console.log(app.z())



//filter function=find any specific value in array
// const app =require('./app')
// const arr=[2,4,7,1,3,4,6,4,6];
// let result = arr.filter((item)=>{
//     return item>=4
// })
// console.warn(result);


//core modules in node js
//fs,buffer,HTTP

//console.log("Hi guys i am yash jadhav")//This console.log is global module ,it does not need to import.
// const fs=require('fs');// file creation not global module
// fs.writeFileSync("hello guys","welcome to my web development journey")



//to create file and to view file path=
// const fs = require('fs')
// console.log("->>",__filename);
// fs.writeFileSync("code.txt","some code")



//short method to create file
// const fs=require('fs').writeFileSync;
// fs("xyz.txt","abc")





//http module handales resp and req
//make server output
// const http = require('http');
// http.createServer((req,resp)=>{
//           resp.write("hello this is yash jadhav");
//           resp.end();
// }).listen(4500);





//color module=after installing color module 
// const colors = require('colors');
// console.log("hello".red);



//to ignore node modules which are heavy in size to push on github we need new file which is .gitignore and write in this file which folder we do not neeed to push



//nodejs is async language means not denpend on previous operation.


//making basic API SERVER
// const http = require("http");
// const data = require("./data");

// http.createServer((req, res) => {
//   res.writeHead(200 , {'Content-Type': 'application/json'});
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5000);


//input from command line or create file with input command
// console.log(process.argv[2])

//File creation
// const fs =require('fs');
// const input =process.argv;

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input") 
// }


//file creation using file module or make files in folder or use path modules 
// const fs= require('fs');
// const path=require('path');
// const dirPath=path.join(__dirname,'files');
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple txt file")
// }


//GET file names and print
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//               console.log("file name is ",item)
//     })

// })


//CRUD operations with file system
 const fs= require('fs');
 const path=require('path');
 const dirPath=path.join(__dirname,'crud');
 const filePath=`${dirPath}/apple.txt`;

 //1>write=
// //fs.writeFileSync(filePath,'This is a simple text file');

//2>Read=
// fs.readFile(filePath,'utf8',(err,item)=>{          //UTF-8 stands for “Unicode Transformation Format - 8 bits or he default character set for HTML5
//      console.log(item);
// })

//3>Append=
// fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated")
// })

// 4>rename=
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated")
// })

//fs.unlinkSync(`${dirPath}/fruit.txt`) //to delete this file

//asynchronous = second task do not wait to finish first task


//asynchronus nodejs example
// let a=10;
// let b=0;

// setTimeout(()=>{
//     b=20;
// },2000)

// console.log(a+b)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Handle asynchronus data in node js=
// let a=20;
// let b=0;

// let waitingData= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })

// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b)
// })

















































































































































































































































































































































