
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

    print() {
        document.writeln("AdharNo : " + this.adharNo + "<br>");
        document.writeln("Birthplace : " + this.birthPlace + "<br>");
    }

}

class Person extends Indian {
    constructor(adharNo,birthPlace,name,age,gender) {
        super(adharNo, birthPlace);
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    person_print() {
        super.print();
        document.writeln("Name: " + this.name + "<br>");
        document.writeln("Age: " + this.age + "<br>");
        document.writeln("Gender: " + this.gender + "<br>");
    }
}

class Employee extends Person {
    constructor(adharNo,birthPlace,name,age,gender,id,salary,role) {
        super(adharNo,birthPlace,name,age,gender);
        this.id = id;
        this.salary = salary;
        this.role = role;
    }

    employee_print() {
        super.person_print();
        document.writeln("Id: " + this.id + "<br>");
        document.writeln("Salary: " + this.salary + "<br>");
        document.writeln("Role: " + this.role + "<br>");

    }


}

const emp = new Employee(568925365893,"Punjab","piyush",20,"male",25,85000,"Manager");
emp.employee_print();

