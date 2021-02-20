const Manager = require('../lib/Manager'); //requiring manager class from lib folder

//all tests from manager class displayed below
test('test manager name', () => {
    let myManagerName = new Manager ('Brian', 10, 'Brian@gmail.com', 223);
    expect(myManagerName.name).toEqual(expect.any(String));
})

test('test manager ID', () => {
    let myManagerID = new Manager ('Brian', 10, 'Brian@gmail.com', 223);
    expect(myManagerID.id).toEqual(expect.any(Number));
})

test('test manager email', () => {
    let myManagerEmail = new Manager ('Brian', 10, 'Brian@gmail.com', 223);
    expect(myManagerEmail.email).toEqual(expect.any(String));
})

test('test manager office number', () => {
    let myManagerOffice = new Manager ('Brian', 10, 'Brian@gmail.com', 223);
    expect(myManagerOffice.officeNumber).toEqual(expect.any(Number));
})