// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// name, id, email
//  + school
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(nameIntern, idIntern, emailIntern, schoolIntern) {
        super(nameIntern, idIntern, emailIntern)
        this.schoolIntern = schoolIntern;
    }
    
    getSchool() {
        return this.schoolIntern;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;