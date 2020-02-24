export default class Direccion {
/**
 * @param calle
 * @param numeroExt
 * @param numeroInt
 * @param colonia
 * @param coPostal
 * @param municipio
 * @param ciudad
 */
    constructor(calle, numeroExt, numeroInt, colonia, coPostal, municipio, ciudad) {
        this.calle = calle
        this.numeroExt = numeroExt
        this.numeroInt = numeroInt
        this.colonia = colonia
        this.coPostal = coPostal
        this.municipio = municipio
        this.ciudad = ciudad
    }
    getFormatoCorto() {
        return `${this.calle} ${this.numeroExt}`
    }
    getFormatoLargo() {
        return `${this.calle} ${this.numeroExt} ${this.numeroInt} ${this.colonia} ${this.coPostal} ${this.municipio} ${this.ciudad}`
    }
}