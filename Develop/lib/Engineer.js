// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// name, id, email 
// + github - github username
const Employee = require("./Employee")

class Engineer extends Employee{
    constructor(nameEngineer1, idEngineer1, emailEngineer1, githubEngineer1) {
        super(nameEngineer1, idEngineer1, emailEngineer1)
        this.githubEngineer1 = githubEngineer1;
    }

    getGithub(){
        return this.githubEngineer1;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;