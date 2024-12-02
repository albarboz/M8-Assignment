//STEP 1
let favoriteMovies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fist of Legend', 'Forrest Gump']
console.log(favoriteMovies[1])

//STEP 2
let movies = new Array(5)
movies[0] = 'Lion King'
movies[1] = 'Shaolin Soccer'
movies[2] = 'The Other Guys'
movies[3] = 'Fists of Legend'
movies[4] = 'Forrest Gump'
console.log(movies[0])


//STEP 3
let movies = new Array(5)
movies[0] = 'Lion King'
movies[1] = 'Shaolin Soccer'
movies[2] = 'The Other Guys'
movies[3] = 'Fists of Legend'
movies[4] = 'Forrest Gump'
console.log(movies[0])

movies.splice(2, 0, 'Gladiator')

console.log(movies.length)

//STEP 4
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump']
delete movies[0]
console.log(movies)

//STEP 5
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django']
for (let movie in movies) {
    console.log(movies[movie])
}

//STEP 6
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django']
for (let movie of movies) {
    console.log(movies[movie])
}

//STEP 7
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
for (let movie in movies) {
    console.log(movies[movie])
}

//STEP 8
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
let leastFavMovies = ['Poor Things', 'The Barbie Movie', 'Me Before You'].sort()

/*console.log('Movies I like:\n')
console.log('')
for (movie of movies) console.log(movie)
console.log('...')
console.log('')
console.log('Movies I regret watching:\n')
console.log('')
for (let movie of leastFavMovies) console.log(movie)
console.log('...')*/

/* Updated version */
console.log(`Movies I Like:\n\n${movies.join('\n')}\n...`)
console.log(`Movies I regret watching;\n\n${leastFavMovies.join('\n')}\n...`)

//STEP 9
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
let leastFavMovies = ['Poor Things', 'The Barbie Movie', 'Me Before You'].sort()

console.log(`Movies I Like:\n\n${movies.join('\n')}\n...`)
console.log(`Movies I regret watching;\n\n${leastFavMovies.join('\n')}\n...`)

movies = movies.concat(leastFavMovies)
movies = movies.sort().reverse()

console.log(`\nAll Movies (reverse sorted):\n\n${movies.join('\n')}}`)

//STEP 10
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
let leastFavMovies = ['Poor Things', 'The Barbie Movie', 'Me Before You'].sort()

console.log(`Movies I Like:\n\n${movies.join('\n')}\n...`)
console.log(`Movies I regret watching;\n\n${leastFavMovies.join('\n')}\n...`)

movies = movies.concat(leastFavMovies)
movies = movies.sort().reverse()

console.log(`\nAll Movies (reverse sorted):\n\n${movies.join('\n')}}`)

let lastMovie = movies.slice(-1)[0]
console.log('\nThe last movie in the array is:', lastMovie)

//STEP 11
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
let leastFavMovies = ['Poor Things', 'The Barbie Movie', 'Me Before You'].sort()

console.log(`Movies I Like:\n\n${movies.join('\n')}\n...`)
console.log(`Movies I regret watching;\n\n${leastFavMovies.join('\n')}\n...`)

movies = movies.concat(leastFavMovies)
movies = movies.sort().reverse()

console.log(`\nAll Movies (reverse sorted):\n\n${movies.join('\n')}}`)

let firstMovie = movies[0]
console.log('\nThe first movie in the array is:', firstMovie)

//STEP 12
let movies = ['Lion King', 'Shaolin Soccer', 'The Other Guys', 'Fists of Legend', 'Forrest Gump', '21 Jump Street', 'Django'].sort()
let leastFavMovies = ['Poor Things', 'The Barbie Movie', 'Me Before You'].sort()
let newFavoriteMovies = ['Shrek 1', 'Shrek 2', 'Shrek 3']

console.log(`Movies I Like:\n\n${movies.join('\n')}\n...`)
console.log(`Movies I regret watching;\n\n${leastFavMovies.join('\n')}\n...`)

movies = movies.concat(leastFavMovies)
movies = movies.sort().reverse()

console.log(`\nAll Movies (reverse sorted):\n\n${movies.join('\n')}}`)

let updatedMovies = movies.map(movie => leastFavMovies.includes(movie) ? newFavoriteMovies[leastFavMovies.indexOf(movie)] : movie)

console.log(`\nUpdated Movies Array (reverse sorted):\n\n${updatedMovies.join('\n')}`);

//STEP 13
movies = [['Shrek 1', 1], ['Shrek 2', 2], ['Shrek 3', 3], ['Shrek 4', 4], ['Shrek 5', 5]]
movies.forEach(movie => {
    let movieNames = movie.filter(item => typeof item === 'string')
    console.log(movieNames)
})

//STEP 14
let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];

let showEmployee = function (employeesArray) {
    console.log("Employees:")
    console.log('')
    employeesArray.forEach(employee => {
        console.log(employee.toUpperCase())
    })
}

showEmployee(employees)

//STEP 15
function filterValues(arr) {
    return arr.filter(value => value !== false && value !== null && value !== 0 && value !== '')
}

console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16
function getRandomNumber(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]
console.log(getRandomNumber(numbers))

//STEP 17
function getLargestNumber(arr) {
    return Math.max(...arr)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100]
console.log(getLargestNumber(numbers))