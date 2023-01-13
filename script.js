// var branding= document.getElementById("brand")
// var model = document.getElementById("model")
// var btn =document.getElementById("btn")

// var a = {
//     mobiles: {
//       samsung: {
//         a30: {
//           name: "a30",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 2000,
//         },
//         note10: {
//           name: "note10",
//           ram: "6gb",
//           rom: "128gb",
//           camera: "50px",
//           price: 4000,
//         },
//         s10: {
//           name: "s10",
//           ram: "3gb",
//           rom: "128gb",
//           camera: "10px",
//           price: 5000,
//         },
//       },
//       iphone: {
//         iphone4: {
//           name: "iphone4",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         iphone4s: {
//           name: "iphone4s",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 20000,
//         },
//         iphone5: {
//           name: "iphone5",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 30000,
//         },
//         iphone6: {
//           name: "iphone6",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 30000,
//         },
//       },
//       xiomi: {
//         redminote10: {
//           name: "redminote10",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redminote11: {
//           name: "redminote11",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redmi10: {
//           name: "redmi10",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//         redmi10pro: {
//           name: "redmi10pro",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//       },
//       oppo: {
//         a3s: {
//           name: "a3s",
//           ram: "4gb",
//           rom: "64gb",
//           camera: "50px",
//           price: 10000,
//         },
//       },
//     },
//   };

//   function abc(){
//     console.log(a.mobiles.value())
//   }

// function abc(){
//    var obj = a.mobiles[brand.value][model.value];
//     console.log(obj)
// }

// Largest Number
// var arr = [
//     20, 0, 30, 0, 90, 91, 82, 0, 0, 0, 98, 0, 100, 97, 200, 300, 0, 0, 0, 400, 0, 500];
// console.log(arr)
// max = -Infinity;
// last = arr.length - 1; // last value position
//   for(var i=0; i<=last;i++){
//     // console.log(arr[i])
//     if(arr[i]>max){
//       max = arr[i]

//     }
//   }
// console.log(max)
//   var arr={
//     //show biggest number
//   }

//parhke ana hai.
//pass by value
//pass by reference

//2nd class

// ====var,let,const

// ===== var
// .redeclarable(y)
// reassignable hai
// block scope(n)
//hoist(y)

//var a = "abc"
//var a = 123
//console.log(a)

// ====let=========

// not- redeclarable(n)
// reassignable hai
// block scope(y)
// hoist(n)

// let a = "abc"
// let a = 123
// console.log(a)

// ====const
// redeclarable(n)
// cannot reassign
// block scope(y)
// hoist(n)

// var a = "abc"
// var a= 123
// console.log(a)

// var a = "abc"
//a = 123
//output = 123

//let a = "abc"
//a = 123
//console.log(a)
//output = error

// template literals======

var name = "basit ahmed";
var a = `my name is ${name}`;

// ternary operators===========
// var marks = 60;
// if (marks<70){
//   console.log("pitai")
// }else{
//   console.log("bachat")
// }

// marks<70? console.log("pitai"):console.log("bachat")

//2nd example of ternary operators
// var marks = prompt();
// if( marks > 70){
//   console.log("abba se bachat")
// }else if(marks >50){
//   console.log("amma se bachat");
// }else{
//   console.log("dono se pitai")
// }

// marks > 70
//   ? console.log("mithai")
//   : marks > 50
//   ? console.log("amma se bachat")
//   : console.log("dono se pitai");

//Circuits============

// let num = "ab"*5;
// let total = num || 0;
// console.log(total)// output NaN

// let bool = true;
// // let total = bool && "ABC"; //output abc
// let total = bool || "ABC"; // output true

// console.log(total);

//objects : methods===================

// let obj = {
//   id: 1,
//   name: "ABC",
//   category: "A",
// };
// let arr = Object.keys(obj);
// let arr = Object.values(obj);
// let arr = Object.entries(obj);
// Object.freeze(obj);
// obj.category = "C";
// console.log(arr);
// console.log(obj);
let head = document.getElementById("head");
let body = document.getElementById("body");
let arr = [
  {
    id: 1,
    name: "ABC",
    category: "A",
    city: "Karachi",
  },
  {
    id: 2,
    name: "MNO",
    category: "C",
    city: "karachi",
  },
  {
    id: 3,
    name: "PQR",
    category: "D",
    city: "Rawalpindi",
  },
];

// let key = Object.keys(arr[0]);
// let bodywork = Object.values(arr[0]);
// for (let i = 0; i < arr.length; i++) {
//   head.innerHTML = Object.keys(arr[0]);
//   body.innerHTML = Object.values(arr[0]);
// }
console.log(key);
let labels = Object.keys(arr[0]);
for (let i = 0; i < labels.length; i++) {
  head.innerHTML += `<th> ${labels[i]}</th>`;
}
for (let i = 0; i < arr.length; i++) {
  let x = arr[i];
  body.innerHTML += `<tr> 
  <td> ${x.id}</td>
  <td> ${x.name}</td>
  <td> ${x.category}</td>
  <td> ${x.city}</td>
</tr>`;
}
