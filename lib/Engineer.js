const Employee = require('./Employee')
const Manager = require('./Manager')
const Intern = require('./Intern');
const inquirer = require('inquirer');

class Engineer {
    constructor (name, id, email, officeNumber, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.github = github
    }
    getName () {
        //return `${this.name}`
        console.log(`hi my name is ${this.name}`)
    }
    getId () {
        return `${this.id}`
        //console.log(`my id is ${this.id}`)
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



//let myEng = new Engineer('Alexander', 2, 'alexgiannini310@gmail.com', 24, 'alexandergiannini')
//console.log(myEng)
//myEng.getName()
//myEng.getId()


module.exports = Engineer



