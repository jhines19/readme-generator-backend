// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => 
`
# ${answers.projectTitle}

[!Github license](http://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description
${answers.projectDescription}


## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${answers.installation}

## Usage
${answers.usage}


## Credits
Project contributors: ${answers.credits}

## License
${answers.license}

## Badges
${answers.badges}

## How to Contribute
${answers.contribute}

## Tests
${answers.test}
  `;


module.exports = generateMarkdown;
