/*1.let variable
let x=10;
{
        
        let y=12;
        // You have inside of the function
        document.getElementById('demo').innerHTML =y;
}
// You Have declar the variable let using the public function
document.getElementById('demo').innerHTML =x; */




/* 2. //const variable

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:

cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo").innerHTML = cars; */




//3. Arrow Function

// let myFunction = (a, b) => a * b;
// document.getElementById("demo").innerHTML = myFunction(104, 5);

// var hello;

// hello = () => {
//   return "Hello World!";
// }

// document.getElementById("demo").innerHTML = hello();


// var hello;

// hello = (val) => "Hello " + val;

// document.getElementById("demo").innerHTML = hello("Universe!");


// var hello;

// hello = (a, b) => {
//   return c=a+b;
// }

// document.getElementById("demo").innerHTML = hello(10,5);


// 4. The For/Of Loop

const cars = ["BMW", "Volvo", "Mini"];

let value = "";
for (let x of cars) {
  value += x + "<br>";
}

//5.  Looping over a String

document.getElementById("demo").innerHTML = text;

let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;

// 6. Maps

const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

const fruits = new Map();

fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.getElementById("demo").innerHTML = fruits;

// 7. Sets

const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");

document.getElementById("demo").innerHTML = letters.size;

// 8. Classes

/*class ClassName 
{
        constructor() { contant}
}*/

class Car 
{
        constructor(name, year) 
        {
          this.name = name;
          this.year = year;
        }
}
      
      const myCar = new Car("Ford", 2014);
      document.getElementById("demo").innerHTML =
      myCar.name + " " + myCar.year;

// 9. Promises

/*const myPromise = new Promise(function(myResolve, myReject)
 {
        // "Producing Code" (May take some time)
        
          myResolve(); // when successful
          myReject();  // when error
});
        
// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then
myPromise.then
myPromise.then
        (
          function(value) { // code if successful  },



          function(error) { // code if some error  }
        );*/

        const myPromise = new Promise(function(myResolve, myReject)
        {
                setTimeout(function(){ myResolve("I love You !!"); }, 3000);
        });
              
         myPromise.then(function(value) 
        {
                document.getElementById("demo").innerHTML = value;
        });

        // The Symbol Type

        const person = 
             {
                firstName: "John",
                lastName: "Doe",
                age: 50,
                eyeColor: "blue"
              };
              
              let id = Symbol('id');
              person[id] = 140353;
              
              document.getElementById("demo").innerHTML = person[id] + " " + person.id;


        //10. Default Parameter Values

        function myFunction(x, y = 10) 
        {
                // y is 10 if not passed or undefined
                return x + y;
        }
              document.getElementById("demo").innerHTML = myFunction(5);