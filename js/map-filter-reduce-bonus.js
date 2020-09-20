const fruits = ['cantaloupe', 'orange', 'date', 'elderberry', 'ugli fruit', 'pinapple']

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
]

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
        {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
        {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];



const firstLetter = fruits.reduce((acc, element) => {
    return acc.concat(element[0])
}, [])
console.log(firstLetter)

const users = customers.map(({name, age}) => ({name, age}))
console.log(users)

const civilServent = customers.filter(({occupation}) => occupation === "Teacher" || occupation === "Police Officer")
console.log(civilServent)

const averageAge = (arr) => {
    let sum = arr.reduce((acc, {age}) => acc + age, 0)
    return sum / arr.length
}

console.log(averageAge(customers))

const makeSuperPet = (obj) => {
    const name = obj.reduce((acc, {name}) => acc + name, "")
    const breed = obj.reduce((acc, {breed}) => acc + breed[0], "")
    const age = obj.reduce((acc, {age}) => acc + age, 0)

    return {
        name,
        breed,
        age
    }
} 

console.log(makeSuperPet(pets))

const petNameLength = pets.filter(({breed}) => breed === 'Pug').reduce((acc, {name}) => acc.concat(name.length), [])

console.log(petNameLength)

const getFemaleFamilyMembers = family.filter(({gender}) => gender === 'female').reduce((acc, {name}) => acc.concat(name), [])

console.log(getFemaleFamilyMembers)
let input = ['Sally', 'Fred', 'Steve']
const fullName = arr => arr.reduce((acc, element) => {
    acc.push(`${element} Smith`)
    return acc
}, [])

console.log(fullName(input))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers2 = [190, 32, 20, 31, 42, 67, 70, 20]

const sumOfDivNumbers = (arr, remainder) => arr.filter(number => number % remainder === 0)
    .reduce((acc, number) => acc + number, 0)



console.log(sumOfDivNumbers(numbers, 2))
console.log(sumOfDivNumbers(numbers2, 10))

const firstLetterString = arr => arr.reduce((acc, element) => acc + element[0], "")

console.log(firstLetterString(input))




