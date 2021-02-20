const { tsImportEqualsDeclaration } = require('@babel/types');
const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee'); //requiring Employee class from lib folder

//tests which run in this employee test file
test('test employee name', () => {
    let test = new Employee ('test', 20, 'string@gmail.com');
    expect(test.name).toEqual(expect.any(String));
})

test('test employee ID', () => {
    let test1 = new Employee ('test1', 22, 'string1@gmail.com');
    expect(test1.id).toEqual(expect.any(Number));
})

test('test employee email', () => {
    let test2 = new Employee ('test2', 23, 'string2@gmail.com');
    expect(test2.email).toEqual(expect.any(String));
})