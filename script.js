const nums = [1, 2, 4, 5];


const doubled = nums.map(n => n * 2);

const evens = nums.filter(n => n % 2 === 0);

const sum = nums.reduce((acc, n) => acc + n, 0);

const firstEven = nums.find(n => n % 2 === 0);

const hasEven = nums.some(n => n % 2 === 0);

const allPositive = nums.every(n => n % 2 === 0);



// map
// const doubled = nums.map(n => n * 2); // [2,4,6,8,10]

// // filter
// const evens = nums.filter(n => n % 2 === 0); // [2,4]

// // reduce
// const sum = nums.reduce((acc, n) => acc + n, 0); // 15

// // find
// const firstEven = nums.find(n => n % 2 === 0); // 2

// // some
// const hasEven = nums.some(n => n % 2 === 0); // true

// // every
// const allPositive = nums.every(n => n > 0); // true


// console.log(allPositive);



// var name2 = "Rustam";
// var newName = '';
// int i;


// for (i = (name2.length - 1); i < name2.length; i = i - 1) {
//     newName += name2[i];
//     console.log(name2[i])
// }

// console.log(newName);






const arr = [
    {
        name: "Rustam",
        salary: 40000,
    },
     {
        name: "Rustam",
        salary: 80000,
    },
     {
        name: "Rustam",
        salary: 50000,
    },
     {
        name: "Rustam",
        salary: 50000,
    },
     {
        name: "Rustam",
        salary: 50000,
    },
     {
        name: "Mustam",
        salary: 40000,
    },
     {
        name: "Rustam",
        salary: 50000,
    },
     {
        name: "Rustam",
        salary: 50000,
    },
     {
        name: "Rustam",
        salary: 70000,
    },

]



// var highestSalary = 0;
// var secondehighestSalary = 0;
// let i;
// for(i = 0; i < arr.length; i++)
// {
//     const salary = arr[i].salary;
// if(salary > highestSalary){
//   highestSalary = salary;
// }
// else if(salary < highestSalary && salary > secondehighestSalary){
//     secondehighestSalary = salary
// }
// }


// console.log(secondehighestSalary);


const object1 = { 
    name : "John Devis",
    role : "Senior Developer",
    startingDate : "11-12-2017"
}


// console.log(Object.keys(object1));
// console.log(Object.values(object1));
// console.log(Object.entries(object1))



// const salaries = [...new Set(arr.map(n => n.salary))];




// ❓ Q1: Arrays

// What’s the difference between map, forEach, and filter in JavaScript? Give me a short example.

// const array = [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8
// ];

//  const forEach =  array.forEach((val, index)=>{
//    return (val*2)

// })


//  const map =  array.map((val, index)=>{ 
//    return (val*2)

// }) 


// const filter =  array.filter((val => val % 2 == 0 ))


// console.log(map)



// ❓ Q2: Objects

// Suppose you have this object:

// const user = { id: 1, name: "Rustam", age: 25 };


// How would you get:

// All keys?

// All values?

// Key-value pairs as an array?


// const user = { id: 1, name: "Rustam", age: 25 };
//  console.log(Object.keys(user)) // prints : ["id", ,"name""age"]
//   console.log(Object.values(user)) // prints : [1,"Rustam", 25]
//   console.log(Object.entries(user)) // prints : [ [ 'id', 1 ], [ 'name', 'Rustam' ], [ 'age', 25 ] ]



const stack = [];



stack.push(1);

console.log(stack);


stack.push(1, 4);

stack.shift();

stack.unshift(5);
console.log(stack);



console.log(stack.length);
console.log(stack.length);
console.log("new console.log");



