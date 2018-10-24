// Réécrire cette fonction en utilisant les paramètres par défaut

const sayHello = (name, first, second, third) => {
    name = name || 'Kristen'
    first = first || 'mange'
    second = second || 'de la'
    third = third || 'salade'
    console.log(name + ' ' + first + ' ' + second + ' ' + third) 
}

sayHello();