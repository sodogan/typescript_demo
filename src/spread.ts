//spread operator

const hobbies = ["tennis", "basketball"];

const myHobbyList = ["running", "yoga"];

//clones the original array!
const _clone = (list: string[]) => {
  return [...list];
};

//add them all in one single list
hobbies.push(...myHobbyList);

const all = [..._clone(hobbies), ..._clone(myHobbyList)];

//get them
const [fHobby, , thirdHobby] = all;

console.log(fHobby, thirdHobby);

const aUser = {
  name: "solen",
  age: 34,
};

const { name: me } = aUser;

console.log(me);

//spread opertaor passed to a function
const _sumAllUp = (...numList: number[]) => {
  const total = numList.reduce((prevValue, currentVal, currentIndex) => {
    console.log(
      `previous val: ${prevValue} current val: ${currentVal} currentIndex : ${currentIndex}`
    );

    prevValue += currentVal;
    return prevValue;
  }, 0);
  return total;
};

let total = _sumAllUp(1, 2, 3, 4);
console.log(total);
