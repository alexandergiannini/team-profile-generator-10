const Employee = require('./Employee')
const Manager = require('./Manager')
const Intern = require('./Intern')

class Engineer {
    constructor (name, id, email, officeNumber, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.github = github
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
        return 'Engineer'
    }
    getGithub () {
        return `${this.github}`
    }
}

module.exports = Engineer