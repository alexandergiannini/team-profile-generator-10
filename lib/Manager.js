const { REFUSED } = require('dns');
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

class Manager {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
        return 'Manager'
    }
}

module.exports = Manager