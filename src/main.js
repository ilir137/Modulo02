

const amigos = 6;
const precio = 120;
const precioBebidas = 18;


console.log("Número de amigos: " + amigos);
console.log(`Precio: ${precio} €`);
console.log(`Precio por bebida: ${precioBebidas} €`);
console.log((precio - amigos*precioBebidas)/amigos);
console.log("Cada amigo debe de pagar " + (precio - amigos*precioBebidas)/amigos + "€ si divides la diferencia del precio total entre el precio de las bebidas por cada amgigo entre el número amigos.");


//Lo mismo peo en objeto
console.log("%cAhora hacemos lo mismo con un objeto", "color:blue; font-size:18px")

const cumpleaños = {
    invitados: 6,
    precio: 120,
    precioBebidas: 18
};
const precio_a_pagar = (cumpleaños.precio - cumpleaños.invitados*cumpleaños.precioBebidas)/cumpleaños.invitados;

console.log(cumpleaños);

console.log("Número de amigos: " + cumpleaños.invitados);
console.log(`Precio: ${cumpleaños.precio} €`);
console.log(`Precio por bebida: ${cumpleaños.precioBebidas} €`);
console.log(precio_a_pagar);
console.log("Cada amigo debe de pagar " + precio_a_pagar + "€ si divides la diferencia del precio total entre el precio de las bebidas por cada amgigo entre el número amigos.");
