
// perform multilevel inheritance where Indian is parent for class person, person is parent for class employee
// indian class - adharNo,birthPlace
// person - name,age,gender
// emp - id,salary, role
// access all properties of parent by child class only and set and get all values.




class Indian {
    constructor(adharNo, birthPlace) {
        this.adharNo = adharNo;
        this.birthPlace = birthPlace;
    }

    empset(AdharNo, BirthPlace) {
        this.AdharNo = AdharNo;
        this.BirthPlace = BirthPlace;
    }

    empget() {
        document.writeln(this.adharNo);
        document.writeln(this.birthPlace);
    }
}

class Person extends Indian {
    constructor(name, age, gender) {
        super(adharNo, birthPlace);
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    emp1set(Name, Age, gender) {
        this.Name = Name;
        this.Age = Age;
        this.gender = gender;
    }

    emp1get() {
        super.empget();
        document.writeln(this.Name);
        document.writeln(this.Age);
        document.writeln(this.gender);
    }
}

class Employee extends Person {
    constructor(id, salary, role) {
        super(adharNo, birthPlace, Name, Age, gender);
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    set(Id, Salary, Role) {
        this.Id = Id;
        this.Salary = Salary;
        this.Role = Role;
    }

    get() {
        super.emp1get();
        document.writeln(this.Id);
        document.writeln(this.Salary);
        document.writeln(this.Role);
    }

}

 const emp = new Employee(4504-5868-7891, "Bharatpur", "Ravi", 22, "Male",1254,5233,"Manager");
 emp.get();

