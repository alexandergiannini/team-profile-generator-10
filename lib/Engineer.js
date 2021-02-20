const Employee = require('./Employee'); //requiring employee class

///Engineer class which uses some properties from Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        super.role = 'Engineer';
    }
    getGithub () {
        return `${this.github}`
    }
}

module.exports = Engineer; //exporting this employee class to other files to use



