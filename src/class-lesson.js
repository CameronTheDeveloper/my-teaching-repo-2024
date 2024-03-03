class Person {
    constructor(firstName, lastName, dob, funnyNUmber, otherNumber = 5) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
      this.number = funnyNUmber;
      this.number2 = otherNumber;

    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }


    getFullName2(middle = ''){
        return this.firstName + ' ' + middle + ' ' + this.lastName;
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  const person2 = new Person('Jacob', 'Smith', '7-8-99');

//   console.log(person1.firstName);
//   console.log(person1.lastName);
  
//   console.log(person2.firstName);
//   console.log(person2.dob);

  console.log(person1.getFullName2());
  console.log(person2.getFullName2('Hello'));

  const fullName = person1.getFullName2();  //



//   console.log(person1.getBirthYear());
//   console.log(person1.getFullName());
// const greetingMessage1 = greetingMessage();
// console.log(greetingMessage());