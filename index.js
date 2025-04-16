// Basic and Optimal code examples for various tasks

// Task 1: Sum of nested array elements

let arr1 = [
    [1, 2, 3],
    [4, 5],
    [10, 20]
];

// Basic code:
let newArr1Basic = arr1.map(x => x.reduce((acc, value) => acc + value));
/*
console.log(newArr1Basic);
*/

// Optimal code:
let newArr1Optimal = arr1.map(x => x.reduce((acc, value) => acc + value));
// console.log(newArr1Optimal);


// Task 2: Sum of even-indexed elements from an array

let arr2 = [5, 10, 15, 20, 25, 30];
let tempAcc = 0;

// Basic code:
let newArr2Basic = arr2.reduce((acc, value, index) => {
    return index % 2 === 0 ? acc + value : acc
}, 0);
/*
console.log(newArr2Basic);
*/

// Optimal code:
let newArr2Optimal = arr2.reduce((acc, value, index) => {
    return index % 2 === 0 ? acc + value : acc
}, 0);
// console.log(newArr2Optimal);


// Task 3: Sort object by keys

let temp = { name: "Ali", age: 25, job: "Developer", city: "Tashkent" };

// Basic code:
let keys = Object.keys(temp).sort();
let sortedObjectBasic = keys.reduce((acc, key) => {
    acc[key] = temp[key];
    return acc;
}, {});

/*
console.log(sortedObjectBasic);
*/

// Optimal code:
let sortedObjectOptimal = Object.keys(temp).sort().reduce((acc, key) => {
    acc[key] = temp[key];
    return acc;
}, {});
// console.log(sortedObjectOptimal);


// Task 4: Combine two objects

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, d: 5 };

// Basic code using entries and spread
let newObjBasic = Object.entries(obj1);
let newObjBasic2 = Object.entries(obj2);
let combinedObjBasic = Object.fromEntries([...newObjBasic, ...newObjBasic2]);

/*
console.log(combinedObjBasic);
*/

// Optimal code using Object.assign
let combinedObjOptimal = Object.assign({}, obj1, obj2);
// console.log(combinedObjOptimal);


// Task 5: Count occurrences of each item in an array

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
let newObjCount = new Map();

// Basic code:
arr.forEach(element => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (element == arr[i]) {
            count++
        }
    }
    newObjCount.set(element, count)
});
/*
console.log(newObjCount);
*/

// Optimal code:
arr.forEach(element => {
    newObjCount.set(element, (newObjCount.get(element) || 0) + 1);
});
// console.log(newObjCount);


// Task 6: Filter Map based on value

const map = new Map([
    ["a", 3],
    ["b", 7],
    ["c", 1],
    ["d", 10],
]);

let newMap = new Map();

map.entries().forEach(value => {
    if (value[1] >= 5) {
        newMap.set(value[0], value[1]);
    }
});

/*
console.log(newMap);
*/


// Task 7: Find max number from Set

const numbers = new Set([12, 45, 7, 22, 5, 89]);
// console.log(Math.max(...numbers));


// Task 8: Count words in a string

const str = "hello world hello everyone in this world";
let mapStr = new Map();
let newStr = str.split(' ');

newStr.forEach((value) => {
    mapStr.set(value, (mapStr.get(value) || 0) + 1)
});
// console.log(mapStr);
