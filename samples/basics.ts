//add function
const add = (number1: number, number2: number, showLog: boolean): number => {
  // if (typeof number2 !== "number") {
  if (showLog) {
    console.log(`result is "  ${number1 + number2} `);
  }
  return number1 + number2;
};
//values
let num1 = 12.56,
  num2 = 34,
  result: number,
  isLoggable: boolean = true;

result = add(num1, num2, isLoggable);

const msg = ` Adding ${num1} and ${num2} = ${result}`;
//call
console.log(msg);
