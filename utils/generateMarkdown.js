function generateMarkdown(data) {
return `# ${data.title}
---

## Description:
${data.description}
---

<!--ts-->
## Table of Contents
${data.table}
<!--ts-->

## Installation
${data.install}
---

## Usage
${data.usage}
---

## Screenshots
${data.screenshot}
---

## Contributions
${data.usage}
---

## License 
${data.contact}
---

## Tests 
${data.contact}
---

## Questions 
${data.contact}
---

## Contact
${data.contact}
---
`


}

module.exports = generateMarkdown;
