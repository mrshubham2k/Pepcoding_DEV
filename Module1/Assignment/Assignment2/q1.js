// Q-  List the side effect and convert the function to a pure function which does the same thing

let arr = [1, 2, 3, 4];

function f(arr) {
    arr = Array(arr.length).fill(0);
    return arr;
}

console.log(arr);

console.log(f(arr));

console.log(arr);