// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

          ## Installation

          ${data.installation}

          ## Usage

          ${data.usage}

          ## Contributing

          ${data.contribution}

          ## License

          ${data.license}

`;
}

module.exports = generateMarkdown;
