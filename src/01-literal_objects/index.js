const character = {
  name: "Tony",
  last_name: "Stark",
  age: 45,
  address: {
    street: 1,
    zip_code: 46464344,
    country: "USA",
  }
}

const character2 = { ...character }
character2.name = "Peter"

console.log(character);
console.log(character2);
