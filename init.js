let datos = {
    foto :"/fotocv.jpg",
    nombre:"Anderson Rogelio",
    apellido:"López González",
    fechaNacimiento: {
        day: 04,
        month: 04,
        year:2000
    },
    numeroCel:098136968,
    email:"andersonrogelio0@gmail.com"
};
function CargarInfo() {
    document.getElementById("myinfo").innerHTML = JSON.stringify(datos);
}

document.addEventListener("DOMContentLoaded", function (e) {
    CargarInfo();
    
});