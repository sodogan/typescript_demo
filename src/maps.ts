//lets use Map first time
let people: Map<string, string> = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"],
]);
people.set("occupation", "Jedi Knight");

//how do you access is
console.log(people);
