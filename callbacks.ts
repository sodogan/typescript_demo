//try return types
function addUp(
  val1: number,
  val2: number,
  callbackHandler: (val: number) => number
) {
  const result = val1 + val2;
  callbackHandler(result);
}

//test in here
addUp(12, 34, (result) => {
  console.log(`The value is ${result}`);
  return 0;
});
