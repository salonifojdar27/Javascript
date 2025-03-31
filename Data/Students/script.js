
// create a class named student with private attributes roll_no,name,age,std and percentage, initialize
// all attributes by parameterized constructor(private attributes need to declare in global scope in class)
// and print all details for 3 students.

class student {
    #Roll_no;
    #Name;
    #Age;
    #Std;
    #Percentage;
  
    constructor(Roll_no, Name, Age, Std, Percentage) {
      this.#Roll_no = Roll_no;
      this.#Name = Name;
      this.#Age = Age;
      this.#Std = Std;
      this.#Percentage = Percentage;
    }
  
    print() {
      document.writeln("Roll_no: " + this.#Roll_no + "<br>");
      document.writeln("Name: " + this.#Name + "<br>");
      document.writeln("Age: " + this.#Age + "<br>");
      document.writeln("Std: " + this.#Std + "<br>");
      document.writeln("percentage: " + this.#Percentage + "<br>");
    }
  }
  
  const p1 = new student(1, "Riya", 12, 6, 80.35 + "<br>");
  p1.print();
  
  const p2 = new student(2, "Priya", 17, 8, 60.86 + "<br>");
  p2.print();
  
  const p3 = new student(3, "Roshni", 17, 9, 90.5);
  p3.print();