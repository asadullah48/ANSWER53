// A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
console.log("Language: ".concat(languages[1], ", Framework: ").concat(frameworks[1], ", Tool: ").concat(tools[1]));
console.log("Language: ".concat(languages[2], ", Framework: ").concat(frameworks[2], ", Tool: ").concat(tools[2]));
console.log("Language: ".concat(languages[2], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[1]));
console.log("Language: ".concat(languages[1], ", Framework: ").concat(frameworks[0], ", Tool: ").concat(tools[0]));
