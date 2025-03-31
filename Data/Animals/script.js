

// wap to craete a class for animal with attribute like name,type,gender and age, make these all
// attribute private to secure direct access of the users, perform input and output for 3 defferent
// animals.

class Animals {
    #name;
    #type;
    #gender;
    #age;
  
    set(name, type, gender, age) {
      this.#name = name;
      this.#type = type;
      this.#gender = gender;
      this.#age = age;
    }
  
    get() {
      document.writeln("Name:"+ this.#name + "<br>");
      document.writeln("Type:" + this.#type + "<br>");
      document.writeln("Gender:"+ this.#gender + "<br>");
      document.writeln("Age:"+this.#age + "<br>");
    }
  }
  
  const p1 = new Animals();
  p1.set("kitty", "Cat", "Male", "2 months" + "<br>");
  p1.get();
  
  const p2 = new Animals();
  p1.set("sona", "Dog", "Male", "4 months" + "<br>");
  p1.get();
  
  const p3 = new Animals();
  p1.set("mona", "Cow", "Female", "5 months" + "<br>");
  p1.get();