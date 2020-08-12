let inquirer = require("inquirer");
let fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function init() {
  inquirer.prompt(questions()).then((response) =>
    fs.writeFile("README.md", generateMarkdown(response), function (err) {
      if (err) {
        console.log(err);
      }
      console.log(response.title);
      console.log(response.email);
      console.log(response.username);
      console.log(response.description);
    })
  );
}
init();

function questions() {
  return [
    {
      type: "input",
      message: "Project Title?",
      name: "title",
    },
    {
      type: "input",
      message: "Project Description?",
      name: "description",
    },
    {
      type: "input",
      message: "Project Installation Instructions?",
      name: "installation",
    },
    {
      type: "input",
      message: "Project Usage Information?",
      name: "usage",
    },
    {
      type: "input",
      message: "Project Contribution Guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Project Test Instructions?",
      name: "instuctions",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a License",
      choices: ["MIT", "ISC", "zLib", "Apache"],
    },
    {
      type: "input",
      message: "Enter Github Username",
      name: "username",
    },
    {
      type: "input",
      message: "Enter Email Address",
      name: "email",
    },
  ];
}
