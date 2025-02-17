// A list showing a programmer's skills in detail
let developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};

// Getting specific skills from the list
let { languages, frameworks, tools } = developerSkills;

// Showing a skill from each category
console.log(`Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`);
console.log(`Language: ${languages[2]}, Framework: ${frameworks[0]}, Tool: ${tools[1]}`);
console.log(`Language: ${languages[1]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`);
