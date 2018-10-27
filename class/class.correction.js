// Remplacer le prototype Calculator3000 par une classe nommée Calculator3001
// Utilisez ensuite cette classe à la place de calculator 3000 en bas de cd fichier

function Calculator3000() {
    this.current = 0;
}

Calculator3000.prototype.reset = function() {
    this.current = 0
}

Calculator3000.prototype.add = function(number) {
    this.current += number;
}

Calculator3000.prototype.subtract = function(number) {
    this.current -= number;
}

Calculator3000.prototype.multiply = function(number) {
    this.current *= number;
}

Calculator3000.prototype.divide = function(number) {
    this.current  /= number; 
}

Calculator3000.prototype.result = function() {
    console.log(this.current);
}

const calc = new Calculator3000();

calc.add(14)
calc.subtract(4)
calc.multiply(10)
calc.divide(2)
calc.result() // Doit logger 50 normalement

