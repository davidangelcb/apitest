
class Planeta {
    constructor(nombre, periodo_rotacion, periodo_orbital, diametro, temperatura, gravedad, terreno, aguas_superficiales, poblacion, residentes, peliculas, creado, editado, url) {
        this.nombre = nombre;
        this.periodo_rotacion = periodo_rotacion;
        this.periodo_orbital = periodo_orbital;
        this.diametro = diametro;
        this.temperatura = temperatura;
        this.gravedad = gravedad;
        this.terreno = terreno;
        this.aguas_superficiales = aguas_superficiales;
        this.poblacion = poblacion;
        this.residentes = residentes;
        this.peliculas = peliculas;
        this.creado = creado;
        this.editado = editado;
        this.url = url;
    }
}

export default Planeta;