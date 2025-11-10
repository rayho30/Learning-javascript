// Create an object
let person = {
  name: "John",
  age: 25,
  city: "Dhaka"
};

console.log("Initial Object:", person);

// Accessing
console.log(person.name);
console.log(person["city"]);

// Changing
person.age = 30;

// Adding new
person.country = "Bangladesh";

// Deleting
delete person.city;

console.log("Updated Object:", person);

// Method inside object
person.greet = function () {
  console.log("Hello, I am " + this.name);
};

person.greet();

// Looping through object
for (let key in person) {
  console.log(key + ":", person[key]);
}

// Object inside array
let products = [
  { id: 1, name: "Phone", price: 20000 },
  { id: 2, name: "Laptop", price: 60000 }
];

console.log(products[0].name);

// Nested object
let company = {
  name: "Tech BD",
  location: {
    city: "Dhaka",
    area: "Banani"
  }
};

console.log(company.location.area);
