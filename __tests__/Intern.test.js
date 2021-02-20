const Intern = require('../lib/Intern')

test('test intern name', () => {
    let myInternName = new Intern ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com', 'UCLA')
    expect(myInternName.name).toEqual(expect.any(String))
})

test('test intern ID', () => {
    let myInternID = new Intern ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com', 'UCLA')
    expect(myInternID.id).toEqual(expect.any(Number))
})

test('test intern email', () => {
    let myInternEmail = new Intern ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com', 'UCLA')
    expect(myInternEmail.email).toEqual(expect.any(String))
})



test('test intern github', () => {
    let myInternGithub = new Intern ('Brian', 10, 'Brian@gmail.com', 223, 'brian@github.com', 'UCLA')
    expect(myInternGithub.github).toEqual(expect.any(String))
})

test('test intern school', () => {
    let myInternSchool = new Intern ('Brian', 10, 'Brian@gmail.com', 'UCLA', 'brian@github.com',)
    expect(myInternSchool.school).toEqual(expect.any(String))
})