//Objects intro
class _Address {
  /* street: string;
  city: string; */

  constructor(private _street: string, public readonly city: string = "here") {}

  //getters
  get Street(): string {
    return this._street;
  }

  describe(this: _Address) {
    console.log(`Street: ${this._street} city: ${this.city}`);
  }
}

class _Department {
  name: string;
  address: _Address;
  private employees: string[];

  constructor(name: string, address: _Address) {
    this.name = name;
    this.address = address;
    this.employees = [];
  }

  addEmployee(name: string) {
    this.employees.push(name);
  }

  showEmployees() {
    console.log(this.employees);
  }
}

//create an Address
const address = new _Address("adnan kahveci");
console.log(address);

console.log(address.Street);

const dept = new _Department("HM", address);

dept.addEmployee("solen");
dept.addEmployee("eren");

dept.showEmployees();

//copy a method
/* const copyAddress = {
  street: "here",
  city: "ankara",
  describe: address.describe,
};

console.log(copyAddress.describe()); */
