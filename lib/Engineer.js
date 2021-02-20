const Employee = require('./Employee')


class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email)
        this.github = github
        super.role = 'Engineer'
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



