// for
// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

let variable = 0;
// console.log(variable++);//0
// console.log(++variable);//2

//while
//pregunto desde un inicio
variable = 0;
while (variable <= 2) {
    variable++;
    console.log("Estoy en el while");
    
}

// Do/while
// Hago y después pregunto
do{
    console.log("Estoy en el do/while")
}while(variable == 0);

//for of
// se utiliza para recorrer
let arreglo = ["Hola", "Chao", "Mundo", "Cualquiera"];

for (elemento of arreglo) {
    console.log(elemento);
}

// for in
// se utiliza para recorrer objetos
let persona = {
    nombre: "Laura",
    apellido: "Prado",
    edad: 21
}

for (key in persona) {
    console.log(key);
}