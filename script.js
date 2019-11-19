// Strings Appear Black in DOM, Numbers and Bools are blue

// console.log("Hello");
// console.log(123);
// console.log(true);

//----------------------------------------------------------

// Logging variables, arrays, objects, tables, errors and warnings

// var greeting = "Hello there!";
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});
// console.error("This is an error");
// console.warn("This is a warning");

//----------------------------------------------------------

//Time for how long it takes for commands within .time to run

// console.time("Greeting");
//   console.log("yo");
//   console.log("yo");
//   console.log("yo,");
//   console.log("it's");
//   console.log("me,");
//   console.log("Kat");
// console.timeEnd("Greeting");

//----------------------------------------------------------

//Type Conversion | Number to a String

// let val;
// val = 5; 
// console.log(val);
// console.log(typeof val)
// val = String(5);
// console.log(val);
// console.log(typeof val);


//Type Conversion | Boolean to a String

// let car;
// car = true;
// console.log(car);
// console.log(typeof car);
// car = String(car);
// console.log(car);
// console.log(typeof car);

//----------------------------------------------------------

//More Exercises with object properties and methods

// let name = "Michael"
// let firstName = name.toUpperCase();
// console.log(firstName);

// firstName = name.toLowerCase();
// console.log(firstName);

// firstName = name.length;
// console.log(firstName);

// let lastChar = name.charAt(name.length - 1);
// console.log(lastChar);

//----------------------------------------------------------

//Template Literals

// const name = "Keith";
// const age = 43;
// const job = "Musician";
// const city = "Kentucky";
// let html;

// html = `
//     <ul>
//         <li> Name: ${name}</li>
//         <li> Age: ${age}</li>
//         <li> Job: ${job}</li>
//         <li> City: ${city}</li>
//     </ul>
// `;

// document.body.innerHTML = html;

//----------------------------------------------------------

//Object Literals

// const person = {
//     firstName: "Maurice",
//     lastName: "Boyd",
//     age: 40,
//     email: "m.boyd@aol.com",
//     hobbies: ["Skiing", "Biking", "Swimming"],
//     address: {
//         street: "Westplate",
//         state: "Wyoming"
//     },
//     birthYear:  function() {
//         return 2019 - this.age;
//     }
// }


// let val;

// val = person.firstName;
// val = person.lastName;
// val = person.hobbies;
// val = person.hobbies[0];
// val = person.address.street;
// val = person.birthYear();

// console.log(val);

//----------------------------------------------------------

//Dates and timestamps

// let today = new Date();
// let birthday = new Date('December 17, 1995 03:24:00');
// let birthdayMonth = birthday.getMonth();

// let currentSeconds = Date.now();
// let event = new Date('August 19, 1975 23:15:30 UTC');
// let jsonDate = event.toJSON();

// let val;

// val = today;
// val = birthday;
// val = birthdayMonth;

// val = currentSeconds;
// val = jsonDate;

// console.log(val);
// console.log(new Date(jsonDate).toUTCString());

//----------------------------------------------------------

//If Statements & Switch Cases

// let name1 = 'Kat';
// let name1 = 'Michael';
// let name1 = 'Cipher';
// let name1 = 'Mario';

// if( name1 === 'Kat'){
//     console.log('Hey Site Author!')
// } else if (name1 === 'Michael'){
//     console.log('Sorry Michael, you have to wait your turn!')
// } else if (name1 === 'Cipher'){
//     console.log('You are the best puppy in the whole world!!')
// }
// else {
//     console.log('Sorry, your princess is in another castle.')
// };


// let name1 = 'Kat';
// let name1 = 'Michael';
// let name1 = 'Cipher';
// let name1 = 'Mario';

// switch(name1){
//     case 'Kat':
//         console.log('Hey Site Author!');
//         break;
//     case 'Michael':
//         console.log('Sorry Michael, you have to wait your turn!');
//         break;
//     case 'Cipher':
//         console.log('You are the best puppy in the whole world!!');
//         break;
//     default:
//         console.log('Sorry, your princess is in another castle.');
// }  

//----------------------------------------------------------
