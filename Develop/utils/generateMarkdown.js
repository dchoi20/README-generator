// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

## Descriptions

${response.description}

## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [Contributing](##Contributing)
* [License](##License)
* [Test Instructions](##Instructions)
* [Quesitons](##Questions)

##  Installation

${response.installation}

## Usage

${response.usage}

## Contributing

${response.contribution}

## Instructions

${response.instuctions}

## License

${response.license}

## Questions 

${response.username}
${response.email}

`;
}

module.exports = generateMarkdown;

// #${response.title}

// /n
