let valor

function getCiudad(){
    const vuelos = document.getElementById('vuelo').value
    console.log(vuelos)


    switch(vuelos){
    case "medellin":
        valor= 90000
        document.getElementById('resultado').value = 90000
        break;
    case "bogota":
        valor= 70000
        document.getElementById('resultado').value = 70000
    case "cali":
        valor= 80000
        document.getElementById('resultado').value = 80000
    default:
        document.getElementById('resultado').value = "vuelo no disponible"
        break;
}
}