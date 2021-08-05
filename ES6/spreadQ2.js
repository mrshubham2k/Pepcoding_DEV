let obj1 = {a:1,b:2}
let obj2={c:3}

let obj3 = {...obj1,...obj2,...obj1,...obj2}

console.log(obj3);