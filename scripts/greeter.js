var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var john = { firstName: "Johny", lastName: "Thinkershine" };
var student = new Student(john.firstName, "S.", john.lastName);
document.body.textContent = greeter(student);
console.log(greeter(student));
//# sourceMappingURL=greeter.js.map