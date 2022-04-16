const driversArr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
]; 
const findMatching = (arr, str) => arr.filter(a => a.toUpperCase() == str.toUpperCase())
const fuzzyMatch = (arr, str) => arr.filter(a => a[0] == str[0])
const matchName = (arr, str) => arr.filter((a => a.name == str))
console.log(matchName(drivers, "Bobby"))