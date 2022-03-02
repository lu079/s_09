// let nota = 7;
// let calificacion = "";
// console.log("He realizado mi examen. Mi resultado e sl siguente:");

// //condición (si nota es mayor o iguañ a 5)
// if (nota <= 5) {
//     calificacion = "Suspendida";
// } else {
//     calificacion = "Aprovada";
// }
// console.log("Mi nota es ", nota);
//  console.log("Estoy", calificacion);


// var nota = 6;
// calificacion = "";

// var calificacion = (nota <= 5) ? "suspendida" : "Aprovada";
// console.log("Mi nota es ", nota);
//  console.log("Estoy", calificacion);

 // if (      ) {verdadero} else {falso}
 //operador ternario: (condicion) ? verdadero : falso


// let nota = 7;
// console.log("He ingresado");
// if (nota >= 5) {
//     console.log("Bienvenido");
// }



// let nota = 8;
// if (nota >= 7){
//     calificacion = "Aprobada";
// } else {
//     calificacion = "Desaprobada";
// }
// console.log("La asignatura ha sido: ", calificacion);


// let nota = 6;
// let calificacion = nota<5 ? "Suspendido" : "Aprovado";
// console.log("Estoy ", calificacion);

// let nota = 4;
// let calificicacion = nota < 5 ? "Suspendido" : "Aprobado";
// console.log("He ", calificicacion);



//let nota =7;
//let calificacion = "";

// nota = prompt ("Ingresa tu nota");
// nota = parseFloat(nota);

// if (nota < 5){
// calificacion = "Insuficiente";
// } else if (nota < 6){
//     calificacion = "Suficiente";
// } else if (nota < 8){
//     calificacion = "Bien";
// } else if (nota <= 9){
//     calificacion = "Notable";
// }else {
//     calificacion = "Sobresaliente";
// }
// console.log("Tu nota es: ", nota);
// console.log("Has obtenido un: ", calificacion);


// nota= prompt ("Ingresa tu nota");
// nota = parseFloat (nota);

// switch (nota){
//     case 10:
//     calificacion = "Sobresaliente";
//     break;
//     case 9:
//     case 8:
//     calificacion = "Notable";
//     break;
//     case 7:
//     case 6:
//     calificacion = "Bien";
//     break;
//     case 5:
//     calificacion = "Suficiente";
//     break;
//     case 4:
//     case 3:
//     case 2:
//     case 1:
//     case 0:
//     calificacion = "Insuficiente";
//     break;
//     default:
//         calificacion = "Valor erróneo";
//         break;
// }
// console.log("Has obtenido un: ", calificacion);

/*var i = 0; //contador o iterador 

while (i < 5) {
    console.log("Valor de i: ", i);
    i ++; //i = i + 1;
}
*/



// var contador;
// contador = 1;
// let num = 0;


// while (contador < 5) {
//   let dato = prompt("Introduce  número del 1 al 10:", "");
//   let num = parseInt(dato);

//   document.write(`El número introducido es ${num} </br>`);
//   // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
//   // document.write("El número introducido es "+num+"</br>");

//   document.write(` El contador es ${contador} </br> `);

//   contador++; //contador = contador + 1;
// }

// document.write(`</br><h2>
//     Fin del Programa </br>
//     contador ya NO es menor que 5.   
//     </h2>`);

// document.write(`</br> Último número introducido es ${num}`);


// let contador = 1;
// let num = 0;

// // AND => &&
// // OR => ||  => ALT + 1

// //   VERDADERO AND FALSO
// while ((num != 7 && contador < 5) || num == 11) {
//   let dato = prompt("Introduce  número del 1 al 10:", "");
//   num = parseInt(dato);

//   document.write(`El número introducido es ${num} </br>`);
//   // ` -> "Alt + 96" or  "alt gr + }" or "tecla a lado de 'P'"
//   // document.write("El número introducido es "+num+"</br>");

//   document.write(` El contador es ${contador} </br> `);

//   contador++; //contador = contador + 1;
// }
// document.write(`</br><h2>
//     Fin del Programa </br>
//     contador ya NO es menor que 5.   
//     </h2>`);

// document.write(`</br> Último número introducido es ${num}`);


/*
let contador = 1; // numerico
let dia = ""; // string
let feriado = ""; // Booleana
let fiesta = ""; // Booleana

while (true) {
  dia = prompt("¿Que día es hoy?");
  feriado = prompt("¿Es feriado?");

  document.write(`Ingresaste: ${dia}, y `);
  document.write(`${feriado} es feriado : `);

  if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles") {
    document.write(`Si trabajas,`);
    if (dia == "Lunes" && feriado == "Si") {
      document.write(`Pero te pagan el doble`);
    }
    if (dia == "Martes" && feriado == "Si") {
      document.write(`Pero te pagan el triple`);
    }
    if (dia == "Miercoles" && feriado == "No") {
      document.write(`Pero te tienen que dar un dia libre`);
    }
  }
  if (dia == "Sabado" || dia == "Domingo") {
    fiesta = prompt("¿Saliste de fiesta?");

    document.write(`No trabajas es FDS,`);
    if ((dia == "Domingo" && feriado == "Si") || fiesta == "Si") {
      document.write(`y nadie te puede obligar a trabajar`);
    }
  }
  document.write(`</br>`);

  let accion = prompt("¿Deseas continuar?");
  if (accion != "Si") {
    break;
  }
}

document.write(`<br>Finalizo el programa`);
*/








