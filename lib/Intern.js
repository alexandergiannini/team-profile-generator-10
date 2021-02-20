const Employee = require('./Employee'); //using employee class in this file

///Intern class which uses some of the same properties as Employee
class Intern extends Employee {
    constructor (name, id, email, school, officeNumber, github) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school;
        super.role = 'Intern';
    }
    getGithub () {
        return `${this.github}`
    }
    getSchool () {
        return `${this.school}`
    }
}



module.exports = Intern; //exporting this intern class to use elsewhere