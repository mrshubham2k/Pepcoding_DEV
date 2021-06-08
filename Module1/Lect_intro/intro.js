//top to bottom compile
//left to right


//System.out.println("");
// console.log("Hello world");

//Data types
//Number , Boolean , String , undefined , Object(Array , object)

//Declaration and initialization
// ES6 syntax => let and const

// blocked scope //let and const both are blocked scope
/*if(true)
{
    let a = 10;
}*/


//console.log(a); Not defined //Refrence error

let a;
//console.log(a); //undefined as a is not initialized

/*a = 100;
if(true)
{
    let a =200;
    console.log(a);
}
console.log(a);
*/
/*const pi;
pi = 3.14;*///Wrong!

const pi = 3.14;
// console.log(pi);

//pi = 200; //type Error /Assignment to a const variable

// ______________________________________________________________________________________________________________________________________________________________

// Control + / for commenting
// let b = "hsihbsd";
// let c = 'bshabvshbvsdjkbhiv';
// let d = true;
// let e = 3.5242;
// let f = undefined;

// Arrays
let movies = ["Winter soldier","Avengers",50,10,""];
console.log(movies);
//push, pop , unshift, shift , splice ,length

console.log(movies[2]);

movies.pop();// deletion from end
// console.log(movies);
movies.push("Endgame"); //append from end
// console.log(movies);
movies.shift(); // deletion from start
// console.log(movies);
movies.unshift("the First soldier"); //append from start
// console.log(movies);
movies.splice(2,1); //starting index,end index and it will remove that area of array
// console.log(movies);
movies[100] = "Infinity war";
// console.log(movies);

// Objects => key values pair
//Key will always be unique
// values can be duplicate
//let movies = [] //New Object()
let avenger = 
{
    "full name": "Steve Rogers",
    place: "Queens",
    skills: [
      "Martial Arts",
      "Taekwondo",
      {
        BestFriend: [
          { name: "Bucky", skills: [] },
          { name: "Natasha", skills: ["Fighting" , "asdas" , "asfasf"] },
        ],
      },
    ],
    movies: ["The First Avenger", "Winter Soldier"],
    age: 200,
};// new object creation or object constructor call or new Object()
  
console.log(avenger.skills[2]["BestFriend"][1].skills[0].substring(4)); 
  

//obtaining keys or values

//Dot notation
// console.log(avenger.place);
// console.log(avenger.movies);

//bracket notation
let key = "age";

// console.log(avenger[key]);


