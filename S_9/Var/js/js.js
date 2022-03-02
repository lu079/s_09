/* var a = 1;
console.log(a);


//Bloque de códifo independiente.
function x(){
    console.log(a);
    a = 5;

    console.log(a);
    console.log(window.a);
} 

x();
console.log(a);
*/

//opc: Bucle con let
console.log("Antes: ",p);
for (let p= 0; p < 3; p++);{
    console.log("- ", p);
}
console.log("Después p : ", p);


//opc: Bucle con var
console.log("Antes: ",p);
for (var p= 0; p < 3; p++);{
console.log("-", p);
}
console.log("Después p : ", p);