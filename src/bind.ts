//lets use Map first time
//Access the DOM object
let btn = document.querySelector("#myButton");
//strict mode finds that its nullable ! makes it sure

//add no-impilicit returns
let add = (val1: number, val2: number) => {
  if (val1 > 0 && val2 > 0) {
    return val1 + val2;
  }
  return;
};
//let btn = document.querySelector("#myButton")!;
function eventHandler(message: string) {
  console.log("You have pressed a button" + message);
}

//add event listener
if (btn) {
  btn.addEventListener("click", eventHandler.bind(null, "hello", true));
}
