const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



const writeToHTML = (managerName, managerId, managerEmail, managerOfficeNumber) => {
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
    <section id="manager-section" class="employee-section">
        <div class="container" id="manager-container">
            <div class="row" id="manager-row">

                <div class="col">

                <h2 class="manager-name">
                Manager: ${managerName}
                </h2>
                <p class="manager-id">ID: ${managerId}</p>
                <a class="manager-email" href="mailto:${managerEmail}">Email: ${managerEmail}</a>
                <p class="manager-office-number">Office Number: ${managerOfficeNumber}</p>




                </div>

            </div>

        </div>
        
    </section>
    
</body>
</html>`
}

//let myEng = new Engineer('Alexander', 2, 'alexgiannini310@gmail.com', 24, 'alexandergiannini')
//console.log(myEng)
//myEng.getName()

const promptUser = data => {
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
        {
        type: 'input', ///'list'
        name: 'menuOption',
        message: 'Would you like to add an engineer, an intern, or are you finished building your team?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finished Building'],
        validate: myMenuOption => {


            if (myMenuOption === "Add an Engineer" || myMenuOption === 'add an engineer') {
                return true
               
                
            } else if (myMenuOption === "Add an Intern" || myMenuOption === "add an intern") {
                return true
            } else if (myMenuOption === 'Finished Building' || myMenuOption === 'finished building') {
                return true
            } else {
                console.log('Please input an appropriate answer.')
                return false
            }
            
        }
         


        },

    ])
} 
//console.log(answers))
promptUser().then(answers => fs.writeFile('./dist/index.html', writeToHTML(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber), err => {
    if (err) {
        throw err;
    }
})

)
  //.then(answers => console.log(answers));






//console.log(inquirer)