// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
        case 'Apache':
            return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
        case 'GPL':
            return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
        case 'BSD':
            return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
// If there is no license, return an empty string
        default:
            return '';
    }
}


// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'Apache':
          return 'https://opensource.org/licenses/Apache-2.0';
      case 'GPL':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'BSD':
          return 'https://opensource.org/licenses/BSD-3-Clause';
// If there is no license, return an empty string      
        default:
          return '';
  }}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  switch (license) {
      case 'MIT':
          return ' License\nThis project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.';
      case 'Apache':
          return ' License\nThis project is licensed under the [Apache](https://opensource.org/licenses/Apache-2.0) license.';
      case 'GPL':
          return ' License\nThis project is licensed under the [GPL](https://www.gnu.org/licenses/gpl-3.0) license.';
      case 'BSD':
          return ' License\nThis project is licensed under the [BSD](https://opensource.org/licenses/BSD-3-Clause) license.';
// If there is no license, return an empty string
          default:
          return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}                                                                        ${renderLicenseBadge(data.license)}

## Description

${data.description}

## 📖 Table of Contents
<pre>
| [Installation](#Installation)
| [Usage](#Usage)
| [Contribution](#contribution)
| [Test](#test)
| [License](#license)
| [Questions](#questions)
</pre>


## ⚙️ Installation
\`\`\`
    ${data.installation}
\`\`\`
## 📊 Usage
\`\`\`
${data.usage}
\`\`\`
## 💎 Contribution
\`\`\`
${data.contribution}
\`\`\`
## 🗒️ Test
\`\`\`
${data.test}
\`\`\`
## 📛 ${renderLicenseSection(data.license)}
License documentation.
${renderLicenseLink(data.license)}

## ❓ Questions
For questions about this project, please reach out to me on GitHub [@${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
`;

}


export default generateMarkdown;
