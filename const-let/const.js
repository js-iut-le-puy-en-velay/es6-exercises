// Remplacez les variables initalisées avec var par const ou let

var users = [
    'Rick Sanchez',
    'Morty Smith',
    'Xavier Dang'
]
var iteration = 0;

users.forEach(function(user) {
    iteration ++;
})

console.log(iteration);