let calculateTotal = (data: number[]) => {
  //get the total of the data
  let total = 0;
  data.forEach((value) => {
    total = total + value;
  });
  return total;
};

let list: number[];

list = [1, 2, 3, 12];

//let _result = calculateTotal(list);

//console.log(`total is ${_result}`);
