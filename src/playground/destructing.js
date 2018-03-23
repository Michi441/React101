

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }
//
// const { name, age } = person;
//
// console.log(`${name} is ${age}.`);
//
// const { city, temp } = person.location;
//
// console.log(`Its ${temp} in ${city}.`);

const address = ['Philadelphia', 'Pennsylvennia', 'Munich'];


console.log(`You are in ${address[1]} ${address[0]}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [itemName, lowPrice, mediumPrice, highPrice] = item;

console.log(`A medium ${itemName} costs ${lowPrice} and on sundays ${highPrice}`);
