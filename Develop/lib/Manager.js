// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// name, id, email
//  + office number
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeManagerPhone) {
        super(name, id, email)
        this.officeManagerPhone = this.officeManagerPhone
    }
   
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeManagerPhone;
    }
}

module.exports = Manager;