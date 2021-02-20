//const { REFUSED } = require('dns');
const Employee = require('./Employee'); //requiring employee class to use in this file

//Manager class which uses some of the same properties as Employee
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        super.role = 'Manager';
    }

    getOfficeNumber () {
        return `${this.officeNumber}`
    }
}

module.exports = Manager; //Manager class to be exported for use in other files