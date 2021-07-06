const character = {
  human_name: "James",
  age: 136,
  mutant_name: "Wolverine",
}

// const { human_name:human, age, mutant_name:mutant } = character;

// console.log(human, age, mutant);

const returnCharacter = ({ human_name, age, country="Canada" }) => {
  return {
    human_name,
    age,
    country
  }
}

const { human_name, age, country } = returnCharacter(character)

console.log(human_name, age, country);
