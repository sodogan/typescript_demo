//try return types
function addUp(val1: number, val2: number) {
  return val1 + val2;
}

const sqrt = (val1: number): number => {
  return Math.sqrt(val1);
};
//type of any function
//b ut still can assign any function is now enough
// let _funcRef:Function;
//function that expects two paramaters and return number
type myCustomFunction = (num1: number, num2: number) => number;
let _funcRef: (num1: number, num2: number) => number;

_funcRef = addUp;

let _anotheFunc: myCustomFunction;

console.log(`The result is ${_funcRef(12, 34)}`);
