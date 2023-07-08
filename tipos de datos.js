
//La variable undefined se utiliza para indicar que una variable no tiene valor asignado.

let x; // variable sin valor asignado
console.log(x); // undefined

// Métodos
console.log(typeof x); // "undefined"
console.log(x === undefined); // true



//El tipo de dato booleano representa un valor verdadero o falso.
let isTrue = true; // variable booleana con valor verdadero
let isFalse = false; // variable booleana con valor falso
console.log(isTrue); // true
console.log(isFalse); // false

// Métodos
console.log(typeof isTrue); // "boolean"
console.log(isTrue.toString()); // "true"



//El tipo de dato numérico representa un número.

let num = 42; // variable numérica
console.log(num); // 42

// Métodos
console.log(typeof num); // "number"
console.log(num.toFixed(2)); // "42.00"
console.log(num.toString()); // "42"

/*OTROS TIPOS DE EJEMPLOS  */
let num1 = 10;
let num2 = 3;

// Suma
let suma = num1 + num2;
console.log('Suma: ' + suma); // Resultado: 13

// Resta
let resta = num1 - num2;
console.log('Resta: ' + resta); // Resultado: 7

// Multiplicación
let multiplicacion = num1 * num2;
console.log('Multiplicación: ' + multiplicacion); // Resultado: 30

// División
let division = num1 / num2;
console.log('División: ' + division); // Resultado: 3.3333333333333335

// Módulo
let modulo = num1 % num2;
console.log('Módulo: ' + modulo); // Resultado: 1

// Incremento
num1++;
console.log('Incremento: ' + num1); // Resultado: 11

// Decremento
num2--;
console.log('Decremento: ' + num2); // Resultado: 2














//El tipo de dato cadena de texto representa una secuencia de caracteres

let str = "Hola, mundo!"; // variable de cadena de texto
console.log(str); // "Hola, mundo!"

// Métodos
console.log(typeof str); // "string"
console.log(str.toUpperCase()); // "HOLA, MUNDO!" // la convierte a Mayusculas
console.log(str.substring(0, 4)); // "Hola"


/* */
let s1 = 'Hola, mundo!';
let s2 = "Hola, amigos!";
//El método length se puede utilizar para obtener el tamaño de una cadena de texto:
console.log('Tamaño de la cadena: ' + s1.length);
//El método indexOf se puede utilizar para encontrar la posición de un carácter o una subcadena dentro de una cadena de texto
console.log('Posición de la coma: ' + s1.indexOf(','));
//El método includes se puede utilizar para comprobar si una cadena de texto contiene otra subcadena:
if (s1.includes('mundo')) {
  console.log('La cadena contiene la subcadena "mundo"');
} else {
  console.log('La cadena no contiene la subcadena "mundo"');
}


//El tipo de dato nulo representa la ausencia intencional de cualquier objeto o valor

let n = null; // variable nula
console.log(n); // null

// Métodos
console.log(typeof n); // "object"
console.log(n === null); // true




//El tipo de dato arreglo representa una cadena ordenada de elementos

let arr = [1, 2, 3, 4, 5]; // variable arreglo
console.log(arr); // [1, 2, 3, 4, 5]

// Métodos
console.log(typeof arr); // "object"
console.log(arr.length); // 5
console.log(arr.reverse()); // [5, 4, 3, 2, 1]



//El tipo de dato objeto representa un objeto con propiedades y métodos

let obj = { // objeto variable
  nombre: "John",
  edad: 30,
  saludar: function() {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
  }
};
console.log(obj.nombre); // "John"
obj.saludar(); // "Hola, mi nombre es John y tengo 30 años."

// Métodos
console.log(typeof obj); // "object"
console.log(Object.keys(obj)); // ["nombre", "edad", "saludar"]