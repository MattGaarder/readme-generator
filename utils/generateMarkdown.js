function generateMarkdown(data) {
return `# ${data.title}

## Description:

${data.description}

---

<!--ts-->
## Table of Contents

* [Installation](#installation)
   * [Usage](#usage)
* [Screenshots](#screenshots)
* [Contributions](#contributions)
* [License](#license)
* [Tests](#tests)
* [Contact](#contact)

<!--ts-->

## Installation

${data.install}

---

## Usage

${data.usage}

---

## Screenshots/Screen-capture

${data.screenshot}

---

## Contributions

${data.contribution}

---

## License 
This project is licensed under the ${data.license} license.
${renderLicenseBadge(data.license, data)}
${renderLicenseText(data.license, data)}

---

## Contact

If you have any questions about the project, please contact me on ${data.email}.

Alternatively, please visit my github account on [${data.account}](https://github.com/${data.github}/) to view my other repositories 

---
`
}


function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GNU GPLv3') {
    return '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'Apache License 2.0') {
    return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Mozilla Public License 2.0') {
    return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }
}

function renderLicenseText(license, data) {
  if (license === 'MIT') {
    return `MIT License

${data.licenseText}
`;
  } else if (license === 'GNU GPLv3') {
    return `GNU GPLv3 License

${data.licenseText}
`;
  } else {
    return '';
  }
}

module.exports = generateMarkdown;
