/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(number1, number2) {
  this.sum = number1 + number2;
  this.sub = number1 - number2;
  this.multi = number1 * number2;
  this.div = number1 / number2;
  this.print = function () {
    console.log(
      `  ${this.sum} - suma
      ${this.sub} - skirtumas
      ${this.multi} - daugyba
      ${this.div} - dalyba`
    );
  };
}

const Numbers = new Calculator(2, 2);
Numbers.print();
