//try return types
function addUpAgain(
  val1: number,
  val2: number,
  callbackHandler: (val: number) => number
) {
  const result = val1 + val2;
  callbackHandler(result);
}

//test in here
addUpAgain(12, 34, (result) => {
  console.log(`The value is ${result}`);
  return 0;
});
