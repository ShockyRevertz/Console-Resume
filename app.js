let basicInfo = {
    name: "Cooper White",
    career: "Wannabe Dev",
    description: "I suck at coding right now :("
}

let otherInfo = {
    interests: ['Gaming', 'Coding', 'Making Music', 'Anime'],
    priorExperience: [
        {
            company: 'DSLD Land Management',
            jobTitle: 'Junior IT',
            jobDescription: "General IT in training"
        }
    ],
    skills: [
        {
            name: 'HTML',
            isCool: false
        },
        {
            name: 'CSS',
            isCool: false
        },
        {
            name: 'JavaScript',
            isCool: true
        },
        {
            name: 'AutoCAD',
            isCool: true
        },
        {
            name: 'Revit',
            isCool: true
        }
    ]
}

//Console logs basicInfo
for (let i in basicInfo) {
    let key = i.charAt(0).toUpperCase() + i.slice(1);
    let val = basicInfo[i];
    if (i == "name") {
        val = val.toUpperCase();
    }
    console.log(key + ": " + val);
}
console.log("\n");

//Console logs interests
console.log("My Interests:")
for (let i = 0; i < otherInfo.interests.length; i++) {
    console.log("* " + otherInfo.interests[i])
}
console.log("\n")

//Function for experience
function displayPosition(comp, title, desc) {
    console.log('* ' + title + ' at ' + comp + ' - ' + desc);
}


//Console logs prior experience 
console.log("My Prior Experience"); 
for (let i = 0; i < otherInfo.priorExperience.length; i++) {
    displayPosition(otherInfo.priorExperience[i].company, otherInfo.priorExperience[i].jobTitle, otherInfo.priorExperience[i].jobDescription);
}
console.log("\n");

//Console logs skills
console.log("My Skills:");
for (let i = 0; i < otherInfo.skills.length; i++) {
    displaySkill(otherInfo.skills[i].name, otherInfo.skills[i].isCool);
}

//Function for skills
function displaySkill(name, coolness) {
    if (coolness == true) {
        name = "BAM: " + name;
    }
    console.log("* " + name);
}
