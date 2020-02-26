import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Producto from "./producto.js"

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

    testPrecio() {
        let valor = new Precio(148.70)
        console.log(valor.getPrecio())
    }

    testProducto() {
        let producto = new Producto("Pizza mexicana grande", new Precio(200.00))
        console.log(producto.getDescripcion())
    }
}



let app = new Main
app.testFecha()
app.testTiempo()
app.testDireccion()
app.testPrecio()
app.testProducto()
