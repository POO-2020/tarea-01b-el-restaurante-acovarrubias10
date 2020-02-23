export default class Tiempo {
    constructor(hora, minuto, periodo = ""){
        this.hora = hora
        this.minuto = minuto
        this.periodo = periodo.toLowerCase()
    }
    getFormato12() {
        if (this.periodo === "am" && this.hora==12){
            return `${this.hora - 12}:${this.minuto} ${this.periodo}`
        }
        else if (this.periodo === "pm" && this.hora>12){
            return `${this.hora - 12}:${this.minuto} ${this.periodo}`
        }
        else if (this.periodo == "am" && this.hora==24){
            return `${this.hora - 24}:${this.minuto} ${this.periodo}`
        }
        else{
            return `${this.hora}:${this.minuto} ${this.periodo}`
        }
    }
    getFormato24() {
        if (this.periodo == "am" && this.hora==12){
            return `${this.hora - 12}:${this.minuto} ${this.periodo}`
        }
        else if (this.periodo == "am" && this.hora==24){
            return `${this.hora - 24}:${this.minuto} ${this.periodo}`
        }
        else if (this.periodo == "pm" && this.hora<12){
            return `${this.hora + 12}:${this.minuto} ${this.periodo}`
        }
        else{
            return `${this.hora}:${this.minuto} ${this.periodo}`
        }
    }
}