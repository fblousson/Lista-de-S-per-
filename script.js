let listaDeSuper = [];

listaDeSuper[0] = "sal";
listaDeSuper[1] = "leche";
listaDeSuper[2] = "pan";

console.log("Primer elemento inicial:", listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;
console.log("Último elemento inicial:", listaDeSuper[ultimoElemento]);

listaDeSuper.push("fideos", "arroz");

listaDeSuper.unshift("café", "azúcar");

console.log("Cantidad total tras agregar elementos:", listaDeSuper.length);

let noHabia = listaDeSuper.pop();
console.log("Producto quitado del final (noHabia):", noHabia);

let comprado = listaDeSuper.shift();
console.log("Producto quitado del inicio (comprado):", comprado);

console.log("Tamaño final de la lista:", listaDeSuper.length);
console.log("Estado final de la lista:", listaDeSuper);