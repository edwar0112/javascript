//2.escribir un programa que almacene la cadena de caracteres contraseña de una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
//por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.



export const contraseñaCorrecta = "Vaca0112";


let contraseñaIngresada = prompt("Ingrese la contraseña:");


const contraseñaCorrectaMinuscula = contraseñaCorrecta.toLowerCase();
const contraseñaIngresadaMinuscula = contraseñaIngresada.toLowerCase();


if (contraseñaIngresadaMinuscula === contraseñaCorrectaMinuscula) {
  console.log("La contraseña es correcta.");
} else {
  console.log("La contraseña es incorrecta.");
}