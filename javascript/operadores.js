// Operador ternario

function cualquiera(cualquierValor) {
    return (cualquierValor > 0) ? 10 : 20;
    
}
//console.log(cualquiera(30));

// Encadenamiento opcional
let persona = {
    nombre : "Laura", 
    apellido: "Pérez",
    hijos: null
}
//console.log(persona?.hijos?.numeroHijos);

// ?? Operador nullish
// Retorna el "Valor por defecto" si la propiedad está nula o undefined
//console.log(persona.hijos ?? "Valor por defecto");

// === y ==
// === valida valor y tipo
// == valida unicamente el valor
console.log(5 == '5');
console.log(5 === '5');

