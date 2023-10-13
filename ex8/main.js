let student = {
    name: 'Ylhan',
    favoriteFood: 'chuleta',
    city: 'Paris',
}

// simple

let result = 0 
let values = Object.values(student)

values.forEach((values) => {
    result += values.length
})

console.log(result)

console.log(result % 2)

// complexe

result = 0 
result = values.reduce((acc, value) => acc + value.length, 0)
console.log(result) 

// pair ou impair 

if (result % 2) {
    console.log('impair')
} else {
    console.log('pair')
}

 