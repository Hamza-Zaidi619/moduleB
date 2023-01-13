var branding= document.getElementById("brand")
var model = document.getElementById("model")
var btn =document.getElementById("btn")

var a = {
    mobiles: {
      samsung: {
        a30: {
          name: "a30",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 2000,
        },
        note10: {
          name: "note10",
          ram: "6gb",
          rom: "128gb",
          camera: "50px",
          price: 4000,
        },
        s10: {
          name: "s10",
          ram: "3gb",
          rom: "128gb",
          camera: "10px",
          price: 5000,
        },
      },
      iphone: {
        iphone4: {
          name: "iphone4",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        iphone4s: {
          name: "iphone4s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 20000,
        },
        iphone5: {
          name: "iphone5",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
        iphone6: {
          name: "iphone6",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
      },
      xiomi: {
        redminote10: {
          name: "redminote10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redminote11: {
          name: "redminote11",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10: {
          name: "redmi10",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        redmi10pro: {
          name: "redmi10pro",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
      },
      oppo: {
        a3s: {
          name: "a3s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
      },
    },
  };


//   function abc(){
//     console.log(a.mobiles.value())
//   }

function abc(){
   var obj = a.mobiles[brand.value][model.value];
    console.log(obj)
}


  // Largest Number
var arr = [
    20, 0, 30, 0, 90, 91, 82, 0, 0, 0, 98, 0, 100, 97, 200, 300, 0, 0, 0, 400, 0, 500];
console.log(arr)
max = -Infinity;
last = arr.length - 1; // last value position
  for(var i=0; i<=last;i++){
    // console.log(arr[i])
    if(arr[i]>max){
      max = arr[i]
    
    }
  }
  console.log(max)
//   var arr={
//     //show biggest number
//   }


  //parhke ana hai.
  //pass by value
  //pass by reference
