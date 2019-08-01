class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello " + person.firstName + " " + person.lastName;
}

let john = { firstName: "Johny", lastName: "Thinkershine" };
let student: Student = new Student(john.firstName, "S.", john.lastName);

document.body.textContent = greeter(student);
console.log(greeter(student));
