import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"

class Main {
    testFecha() {
        let fecha = new Fecha(18, 2, 2023)
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha());
    }

    testTiempo() {
        let tiempo = new Tiempo(13, 0, "pm")
        console.log(tiempo.getFormato12())
        console.log(tiempo.getFormato24())
    }
    
    testDireccion() {
        let direccion = new Direccion("Gral. Pablo Gonzalez", 473, 0, "Loma Bonita", 28984, "Villa de Alvarez", "Colima")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoLargo())
    }
}



let app = new Main
app.testFecha()
app.testTiempo()
app.testDireccion()
