//tuples are strict arrays with type
//Fixed length array
let tup: [string, number];
//OK
tup = ["Alex", 19087];

tup.forEach((value) => {
  console.log(value);
});
