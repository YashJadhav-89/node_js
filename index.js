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







































































































































































































































































































































