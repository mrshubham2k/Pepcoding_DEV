let a = [1,2,3,4,5];

function double(x)
{
    return 2*x;
}

function isMap(a,double)
{
    let arr = [];
    for(let i=0;i<a.length;i++)
    {
        arr.push(double(a[i]))
    }
    return arr;
}

let Ansarr = isMap(a,double);

// let Ansarr = a.map(double);

console.log(a);
console.log(Ansarr);