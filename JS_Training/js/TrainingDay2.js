// // // JavaScipt Training Day 2

// console.log(a);
// var a =5;

// class Hero{
//     constructor(name){
//         this.name = name;
//     }

//     print = () => {
//         console.log(`my name is ${this.name}`);
//     }
// }

// let batman = new Hero("Batman");

// console.log(batman);

// // JS Closure
// function x(){
//     var a = 5;
//     function y(){
//         console.log(a);
//     }

//     return y;
// }

// const z = x();
// z();

// for (var i = 0; i < 5; i++) { 
//     ((i) => setTimeout(()=>{
//       console.log(i);
//       console.log("something");
//     },2000))(i);
//   }

let arr = [10,20,30,40,50,60,70,80,80,90];

let [a,b,c,...rest] = arr;

// console.log(a,b,c,rest);
{
    var myObj = {
        title: "A",
        width: 10,
        height: 20
    }

    let title = "abcd";
    let width = 50;
    let height = 24;

    ({title:heading,width,height} = myObj);

    console.log(heading,width,height,"line 58");
}

var myObj2 = {
    title: {
        myname: "a",
        myvalue: 5
    },
    width: 10,
    height: 20,
    len: 34
}

let {title:{myname, myvalue},width,height, len = 54544} = myObj2;

console.log(myname, myvalue, len);