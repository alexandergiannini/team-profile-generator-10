const Engineer = require('../lib/Engineer')

test('test engineer name', () => {
    let myEngineerName = new Engineer ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com')
    expect(myEngineerName.name).toEqual(expect.any(String))
})

test('test engineer ID', () => {
    let myEngineerID = new Engineer ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com')
    expect(myEngineerID.id).toEqual(expect.any(Number))
})

test('test engineer email', () => {
    let myEngineerEmail = new Engineer ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com')
    expect(myEngineerEmail.email).toEqual(expect.any(String))
})

test('test engineer office number', () => {
    let myEngineerOffice = new Engineer ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com')
    expect(myEngineerOffice.officeNumber).toEqual(expect.any(Number))
})

test('test engineer github', () => {
    let myEngineerGithub = new Engineer ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com')
    expect(myEngineerGithub.github).toEqual(expect.any(String))
})