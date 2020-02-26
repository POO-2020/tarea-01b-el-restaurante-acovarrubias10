export default class Precios{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this.valor = valor
    }
    getPrecios(){
        return `$${new Intl.NumberFormat("en-UA").format(this.valor)}`
    }
}