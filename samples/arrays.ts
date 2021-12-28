const addAll = (numList: number[]): number => {
  let total = 0;
  numList.forEach((val) => {
    total = total + val;
  });
  return total;
};

//a simple array
const total = addAll([1, 2, 4]);
console.log(`total is ${total}`);

const person = {
  name: "solen",
  age: 30,
  hobbies: ["sports", "chess", "cooking"],
};

for (let hobby of person.hobbies) {
  console.log(hobby);
}
//specify that its string or number explicitly!
let activities: (string | number)[] = [1, 2, "sports"];
