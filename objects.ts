let personGeneric: object = {
  fullName: "solen dogan",
  display: function () {
    console.log("hello");
  },
};
const person: {
  name: string;
  age: number;
} = {
  name: "solen",
  age: 30,
};

const person2 = {
  fname: "solen",
  lname: "dogan",
  age: 30,
};

//Generic object can not access property like personGeneric.fullName!
//Typescript does not know the full type so does not see any properties
console.log(personGeneric);

//As typescript knows the full type so we can access the person.name
console.log(person);

const product = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
