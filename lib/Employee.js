const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const inquirer = require('inquirer');

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        return 'Employee'
    }
}

let myEmployee = new Employee('string', 10, 'string@gmail.com')
console.log(myEmployee)
myEmployee.getName()

module.exports = Employee