export default class Fecha {

    constructor(dia, mes, año) {
        this.fecha = new Date(año, mes, dia)
        this.diaSemana = ["Domingo,", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"]
        this.nombreMes = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    }

    getAños() {
        let años = this.fecha.getFullYear() - new Date(Date.now()).getFullYear()
        return años
    }

    getMeses() {
        return this.getAños() * 12
    }
    getSemanas() {
        return this.getMeses() * 4
    }
    getDias(){
        return this.getSemanas() * 7
    }
    getFecha(){
        let fechaFormato = `${this.fecha.getDate()}/${this.nombreMes[this.fecha.getMonth()-1]}/${this.fecha.getFullYear()}`
        return fechaFormato
    }
    getDiaFecha(){
        let diaF = this.diaSemana[this.fecha.getDay()]
        return diaF
    }
}