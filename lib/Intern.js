const Employee = require('./Employee')
const Manager = require('./Manager')
const Engineer = require('./Employee')

class Intern {
    constructor (name, id, email, officeNumber, github, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.github = github;
        this.school = school
    }
    getName () {
        return `${this.name}`
    }
    getId () {
        return `${this.id}`
    }
    getEmail () {
        return `${this.email}`
    }
    getRole () {
        return 'Intern'
    }
    getGithub () {
        return `${this.github}`
    }
    getSchool () {
        return `${this.school}`
    }
}

module.exports = Intern