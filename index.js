const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const employeeList = []

///create function that loops thru employeelist, where we check the role of each employee 3 if statements for manager intern engineer; have a variable that holds the string/html that will be generate as we go through the loop
//

const renderEmployees = () => {
    let myEmployeeList = ''

    for (let i = 0; i < employeeList.length; i++ ) {
        if (employeeList[i].getRole() === 'Engineer') {


            myEmployeeList += 

            `<section id="manager-section" class="engineer-section">
        <div class="container" id="engineer-container">
            <div class="row" id="engineer-row">

                <div class="col">

                <h2 class="manager-name">
                Engineer: ${employeeList[i].getName()}
                </h2>
                <p class="manager-id">ID: ${employeeList[i].getId()}</p>
                <a class="engineer-email" href="mailto:${employeeList[i].getEmail()}">Email: ${employeeList[i].getEmail()}</a> <br>
                <a class="engineer-github" href="https://github.com/${employeeList[i].getGithub()}" target="_blank">GitHub Username: ${employeeList[i].getGithub()}</a>



                </div>

            </div>

        </div>
        
    </section>`



        } else if (employeeList[i].getRole() === 'Intern') {

            myEmployeeList += 

            `<section id="manager-section" class="intern-section">
        <div class="container" id="manager-container">
            <div class="row" id="manager-row">

                <div class="col">

                <h2 class="manager-name">
                Intern: ${employeeList[i].getName()}
                </h2>
                <p class="manager-id">ID: ${employeeList[i].getId()}</p>
                <a class="intern-email" href="mailto:${employeeList[i].getEmail()}">Email: ${employeeList[i].getEmail()}</a>
                <p class="manager-office-number">School: ${employeeList[i].getSchool()}</p>



                </div>

            </div>

        </div>
        
    </section>`

        } else if (employeeList[i].getRole() === 'Manager') {
            myEmployeeList += 

            `<section id="manager-section" class="manager-section">
        <div class="container" id="manager-container">
            <div class="row" id="manager-row">

                <div class="col">

                <h2 class="manager-name">
                Manager: ${employeeList[i].getName()}
                </h2>
                <p class="manager-id">ID: ${employeeList[i].getId()}</p>
                <a class="manager-email" href="mailto:${employeeList[i].getEmail()}">Email: ${employeeList[i].getEmail()}</a>
                <p class="manager-office-number">Office Number: ${employeeList[i].getOfficeNumber()}</p>




                </div>

            </div>

        </div>
        
    </section>`
        }
    }
    return myEmployeeList
}


const writeToHTML = () => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> 
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="my-team-banner">
        <h1 class="my-team-text">
            My Team
        </h1>
    </header>

    ${renderEmployees()}



    
    
</body>
</html>`
}

//let myEng = new Engineer('Alexander', 2, 'alexgiannini310@gmail.com', 24, 'alexandergiannini')
//console.log(myEng)
//myEng.getName()

const promptManager = () => {
    return inquirer.prompt([
        {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of your manager?',
        validate: managerName => {
            if (managerName && managerName.trim().length > 0) {
                return true;
            } else {
                console.log('Please input the name of your manager.');
                return false;
            }
        }
        }, 
        {
        type: 'input',
        name: 'managerId',
        message: 'What is your managers ID?',
        validate:  managerId => {
            if (managerId && managerId.trim().length > 0) {
                return true;
            } else {
                console.log('Please input the ID of your manager.');
                return false;
            }
        }
        },
        {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your managers email?',
        validate: managerEmail => {
            if (managerEmail && managerEmail.trim().length > 0) {
                return true;
            } else {
                console.log('You need to input a valid email for your manager.');
                return false;
            }
        }
        },

        {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'What is your managers office number?',
        validate: managerOfficeNumber => {
            if (managerOfficeNumber && managerOfficeNumber.trim().length > 0) {
                return true;
            } else {
                console.log('You need to input your managers office number.');
                return false;
            }
        }
        },
        


        
        

    ])
} 

const promptUser = () => {
    return inquirer.prompt([
        
        


        {
        type: 'list', ///'list'
        name: 'menuOption',
        message: 'Would you like to add an engineer, an intern, or are you finished building your team?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finished Building'],
        //validate: myMenuOption => {


        //    if (myMenuOption === "Add an Engineer" || myMenuOption === 'add an engineer') {
             //   return true
               
                
          //  } else if (myMenuOption === "Add an Intern" || myMenuOption === "add an intern") {
              //  return true
          //  } else if (myMenuOption === 'Finished Building' || myMenuOption === 'finished building') {
             //   return true
           // } else {
              //  console.log('Please input an appropriate answer.')
             //   return false
           // }
            
        //}
         


        },
        {
        type: 'input',
        name: 'engineerName',
        message: 'What is the name of the engineer?',
        when: (data) => data.menuOption === 'Add an Engineer'
        },
        {
        type: 'input',
        name: 'engineerID',
        message: 'What is the ID of the engineer?',
        when: (data) => data.menuOption === 'Add an Engineer'
        },
        {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email of the engineer?',
        when: (data) => data.menuOption === 'Add an Engineer'
        },
        {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is the github name of the engineer?',
        when: (data) => data.menuOption === 'Add an Engineer'
        },
        {
        type: 'input',
        name: 'internName',
        message: 'What is the name of the intern?',
        when: (data) => data.menuOption === 'Add an Intern'
        },
        {
        type: 'input',
        name: 'internID',
        message: 'What is the id of the intern?',
        when: (data) => data.menuOption === 'Add an Intern'
        },
        {
        type: 'input',
        name: 'internEmail',
        message: 'What is the email of the intern?',
        when: (data) => data.menuOption === 'Add an Intern'
        },
        {
        type: 'input',
        name: 'internSchool',
        message: 'What is the school of the intern?',
        when: (data) => data.menuOption === 'Add an Intern'
        },
        

    ])
}







promptManager().then(managerAnswers => {
    employeeList.push(new Manager (managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber))
    listMenu()
    
})

const listMenu = () => {
    promptUser().then(answers => {
        switch(answers.menuOption) {
            case "Add an Engineer":
            employeeList.push(new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub))
            listMenu();
            break;
    
            case "Add an Intern":
            employeeList.push(new Intern (answers.internName, answers.internID, answers.internEmail, answers.internSchool))
            listMenu();
            break;
    
            case "Finished Building":
            fs.writeFile('./dist/index.html', writeToHTML(), err => {
                if (err) {
                    throw err
                }
            })
        }
    })
}


//console.log(answers))
//promptUser().then(answers => fs.writeFile('./dist/index.html', writeToHTML(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber), err => {
  //  if (err) {
    //    throw err;
    //}
//})

//)
  //.then(answers => console.log(answers));






//console.log(inquirer)