import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js"
import Precios from "./precio.js"
import Producto from "./producto.js"
import ElementoPedido from "./elementoPedido.js"

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

    testPrecios(){
        let precio1 = new Precios(200.44)
        console.log(precio1.getPrecios())
    }

    testProducto() {
        let producto = new Producto("Pizza mexicana grande", new Precios(200.00))
        console.log(producto.getDescripcion())
    }

    testElementoPedido(){
        let pedido1 = new ElementoPedido(new Producto("Pizza mexicana grande", new Precios (289.45)), 3)
        console.log(pedido1.getDescripcion())
    }
}



let app = new Main
app.testFecha()
app.testTiempo()
app.testDireccion()
app.testPrecios()
app.testProducto()
app.testElementoPedido()
