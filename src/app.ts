interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(): void;
}

let manager: Greetable;

manager = {
  name: "solen",
  greet: function () {
    console.log("Inside");
  },
};

//Now with classes

class Employee implements Greetable {
  public name: string;
  private _age: number;
  private _address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this._age = age;
    this._address = address;
  }

  greet(): void {
    console.log(" i am greeting you");
  }
  get address() {
    return this._address;
  }
  get age() {
    return this._age;
  }
}

let emp1 = new Employee("solen", 40, "beylikduzu");

emp1.greet();
