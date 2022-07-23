function Nombres(){

const value = document.getElementById('nombre').value
let nombres=['maximiliano','johana','alex','santiago','isabella','matias','catalina'];
console.log

const nombre = nombres.find((nombre) => nombre === value)
console.log(nombre)
if(!nombre){
alert("No se encontro el nombre buscado")
}
else{
console.log("Nombre encontrado", nombre)
document.getElementById('resultado').value=nombre
}
}