const Employee = require('./Employee')


class Intern extends Employee {
    constructor (name, id, email, school, officeNumber, github) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school
        super.role = 'Intern'
    }
    getGithub () {
        return `${this.github}`
    }
    getSchool () {
        return `${this.school}`
        //console.log(`I went to ${this.school}`)
    }
}



module.exports = Intern