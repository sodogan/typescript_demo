//try return types
function addUp(val1: number, val2: number): number {
  return val1 + val2;
}

const add = (val1: number, val2: number): number => {
  return val1 + val2;
};

const display = (val: number): void => {
  console.log(val);
};

let total = add(23, 45);
