const arr = [1, 2, 66, 3, 4, 5, 6, 20, 7, 23, 8, 9];
const maxElemant = arr => Math.max(...arr);

console.log(maxElemant(arr));


const array = [1, 2, 3];
function copyArray (arr) {
    let [...newArr] = arr;
    return newArr;
}
const copiedArray = copyArray(array);

console.log(array, copiedArray);
console.log(array === copiedArray);


const a = {name: 123}
function addUniqueId (value) {
    let newValue = Object.assign({}, value);
    let id = Symbol('id');
    newValue[id] = Math.round(Math.random() * 1000000);
    return newValue;
}
const b = addUniqueId(a);

console.log(a);
console.log(b);
console.log(a !== b);


const oldObj = {name: `Someone`, details: { id: 1, age: 11, university: `UNI`}};
function regroupObject(oldObj) {
    const {name, details} = oldObj;
    return {
        university: details.university, 
        user: { 
            age: details.age,
            firstName: name, 
            id: details.id,
        }
    };
};

console.log(regroupObject(oldObj));


const arrOfNumbers = [1, 1, 23, 3, 4, 5, 6, 5, 4, 23, 2, 1, 1, 1, 1, 1];
const findUniqueElements = array => [...new Set(array)];

console.log(findUniqueElements(arrOfNumbers));


const phoneNumber = `0123456789`;
const hideNumber = phoneNumber => phoneNumber.slice(-4).padStart(10, "*")

console.log(hideNumber(phoneNumber))


function promiseFunction() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => data.sort((a, b) => a.name.localeCompare(b.name)))
        .then(result => console.log(result));
};

promiseFunction()


async function asyncAwaitFunction() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const parseUsers = await users.json();
    const result = parseUsers.sort((a, b) => a.name.localeCompare(b.name));
    console.log(result);
}

asyncAwaitFunction();


function required () { 
    throw new Error("Missing property");
}
function add(a = required(), b = required()) {
    return a + b;
}

add(1);
