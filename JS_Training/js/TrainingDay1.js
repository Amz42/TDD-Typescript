// // // JavaScipt Training Day 1
let tasks = [
    { "name": "Learn Angular", "rating": 3 },
    { "name": "Learn React", "rating": 5 },
    { "name": "Learn Erlang", "rating": 3 },
    { "name": "Learn Go", "rating": 5 }
];

let fl = tasks.filter((item) => item.rating > 3);

console.log(fl);

let op = tasks.reduce((data, obj) => {
    data[obj.name] = obj.rating;
    return data;
}, {});

console.log(op);

// overriding a map using customized 
Array.prototype.map = (fn) => {
    return this.reduce((accu, item) => {
        // console.log();
        return [...accu, fn(item)];
    });
};

let res = tasks.map((item) => console.log(item.rating));

console.log(res);

mynewFunc(5);
var mynewFunc = function(n) {
    console.log(n);
}

// IIFE - Immidiately Invoked Function Expression
(function(){
    console.log("hello")
})();