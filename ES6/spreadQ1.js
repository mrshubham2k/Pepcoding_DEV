let a = [1,2,4,5];
let b = [...a.slice(0,2),3,...a.slice(2)];
console.log(b);