//custom types
type numStr = number | String;
type conversionDescriptor = "as-a-number" | "as-a-string";
type user = {
  name: string;
  age: number;
};

const person: user = {
  name: "solen",
  age: 30,
};

//add function
const add = (value1: numStr, value2: numStr, value3: conversionDescriptor) => {
  let result: numStr;
  if (typeof value1 === "number" && typeof value2 === "number") {
    result = value1 + value2;
  } else if (typeof value1 === "string" && typeof value2 === "string") {
    result = value1.toString() + value2.toString();
  }
  return result;
};

//create
