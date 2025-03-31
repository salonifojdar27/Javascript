
// wap to create a class for employee with attributes like id ,name,salary and role, set all attributes
// and get for atleast 3 objects/employee.

class employee {
    id;
    name;
    salary;
    role;
  
    set(id, name, salary, role) {
      this.id = id;
      this.name = name;
      this.salary = salary;
      this.role = role;
    }
  
    get() {
      document.writeln("Id:"+ this.id + "<br>");
      document.writeln("Name:"+ this.name + "<br>");
      document.writeln("Salary:"+ this.salary + "<br>");
      document.writeln("Role:"+ this.role + "<br>");
    }
  }
  
  const p1 = new employee();
  p1.set(1, "Shreya", 15000, "Manager" + "<br>");
  p1.get();
  
  const p2 = new employee();
  p1.set(2, "Rahul", 20000, "Accountant" + "<br>");
  p1.get();
  
  const p3 = new employee();
  p1.set(3, "Divya", 5000, "HR");
  p1.get();