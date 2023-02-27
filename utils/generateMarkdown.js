// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }


function generateMarkdown(data) {
  return `#${data.title}

##Description:
${data.description}

##Table of Contents
${data.table}

##Installation
${data.install}

##Usage
${data.usage}

##Screenshots
${data.screenshot}

##Contributions
${data.usage}

##Contact
${data.contact}
`;
}

module.exports = generateMarkdown;
