let a = [1,2,3,4,5];

function isEven(x)
{
    if(x%2==0)
    {
        return true;
    }
    return false;
}

function isFilter(a,isEven)
{
    let arr = [];
    let idx = 0;
    for(let i=0;i<a.length;i++)
    {
        if(isEven(a[i]))
        {
            arr[idx] = a[i];
            idx++;
        }
    }
    return arr;
}

let Ansarr = isFilter(a,isEven);

// let Ansarr = a.filter(isEven);

console.log(a);
console.log(Ansarr);