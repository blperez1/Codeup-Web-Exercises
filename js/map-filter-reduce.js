const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let lang = users.filter(({languages}) => languages.length >= 3)

let _email = users.map(({email}) => email)

function averageYears() {
    let sum = users.reduce((acc, {yearsOfExperience}) => acc + yearsOfExperience, 0)
    return sum / users.length
}

averageYears()

let longestEmail = users.reduce((longest, {email}) => {
   return longest.length < email.length ? email : longest 
}, "")

function instructorNames() {
    let instructors = users.reduce((acc, {name}) => `${acc + name}, `, "")
    return `Your instructors are: ${instructors}`
}

instructorNames()

let codeLanguages = users.reduce((acc, {languages}) => acc + languages, "")
console.log(codeLanguages)