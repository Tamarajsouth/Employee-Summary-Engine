// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// const writeFileAsync = util.promisify(fs.writeFile);
// const htmlRenderer = require("./htmlRenderer")
const htmlRenderer = require("./lib/htmlRenderer");

function promptUser() {
    return inquirer.prompt ([
        {
            type: "input",
            message: "Enter Manager Name:",
            name: "managerName",
        },
        {
            type: "input",
            message: "Enter Manager ID:",
            name: "managerID",
        },
        {
            type: "input",
            message: "Manager Email:",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "Manager Office Phone Number:",
            name: "officeManagerPhone",
        },
        {
            type: "input",
            message: "Name of Engineer #1",
            name: "nameEngineer1",
        },
        {
            type: "input",
            message: "ID of Engineer #1:",
            name: "idEngineer1",
        },
        {
            type: "input",
            message: "Email of Engineer #1:",
            name: "emailEngineer1",
        },
        {
            type: "input",
            message: "Github username of Engineer #1:",
            name: "githubEngineer1",
        },
        {
            type: "input",
            message: "Name of Engineer #2",
            name: "nameEngineer2",
        },
        {
            type: "input",
            message: "ID of Engineer #2:",
            name: "idEngineer2",
        },
        {
            type: "input",
            message: "Email of Engineer #2:",
            name: "emailEngineer2",
        },
        {
            type: "input",
            message: "Github username of Engineer #2:",
            name: "githubEngineer2",
        },
        {
            type: "input",
            message: "Name of Intern",
            name: "nameIntern",
        },
        {
            type: "input",
            message: "ID of Intern:",
            name: "idIntern",
        },
        {
            type: "input",
            message: "Email of Intern:",
            name: "emailIntern",
        },
        {
            type: "input",
            message: "Github username of Intern:",
            name: "githubIntern",
        },

    ])
}
    async function init(){
        console.log("you did it!")
        try {
            const answers = await promptUser();

            const html = htmlRenderer(answers);
            await writeFileAsync("index.html", html);
            console.log("wrote to html");
        } catch (err) {
            console.log(err);
        }
    }


init();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Success! HTML file generated");
//       }
//     });
//   }

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
