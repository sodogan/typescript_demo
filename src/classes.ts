abstract class Department {
  public static fiscalYear = 2016;
  private _employees: string[] = [];

  constructor(private readonly _id: string, protected _name: string) {}

  addEmployee(name: string) {
    this._employees.push(name);
    return this;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }
  get employees() {
    return this._employees;
  }
  set name(newName: string) {
    this._name = newName;
  }

  //static method
  static printFiscalYear(): void {
    console.log(`Fiscal year is ${Department.fiscalYear}`);
  }
  abstract describe(this: Department): void;
}

class ITDepartment extends Department {
  constructor(id: string, private _manager: string) {
    super(id, "IT");
  }
  //try to access the Department

  get manager() {
    return this._manager;
  }

  describe(): void {
    console.log(`Overriden Inside the Department: ${this._name}`);
  }
}

class AccountingDepartment extends Department {
  private static _self: AccountingDepartment;

  private constructor(id: string) {
    super(id, "Accounting");
  }

  describe(this: Department): void {
    console.log(`Inside the Accounting department with id:${this.id}`);
  }

  static getInstance(id: string): AccountingDepartment {
    if (!AccountingDepartment._self) {
      AccountingDepartment._self = new AccountingDepartment(id);
    }
    return AccountingDepartment._self;
  }
}

const dept1 = new ITDepartment("12-45", "HR");

dept1.addEmployee("solen").addEmployee("eren");

dept1.describe();

const accDept1 = AccountingDepartment.getInstance("12-45");

accDept1.describe();
/*
//create an Address
const address = new Address("adnan kahveci");
console.log(address);

console.log(address.Street);


dept.showEmployees();

//copy a method
 const copyAddress = {
  street: "here",
  city: "ankara",
  describe: address.describe,
};

console.log(copyAddress.describe()); */
