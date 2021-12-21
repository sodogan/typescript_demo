//add function
const add = (value1: number | string, value2: number | string) => {
  let result: number | string;
  if (typeof value1 === "number" && typeof value2 === "number") {
    result = value1 + value2;
  } else if (typeof value1 === "string" && typeof value2 === "string") {
    result = value1.toString() + value2.toString();
  }
  return result;
};

//lets test
let total: number | string;

total = add(23, 45);
console.log(total);

total = add("Max", "Anna");
console.log(total);
