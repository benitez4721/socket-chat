

class Usuarios {

    constructor() {

        this.personas = [];

    }

    agregarPersona(id, nombre, sala){
        let persona ={
            id,
            nombre,
            sala
        };
        this.personas.push(persona);

        return this.personas;
    }

    getPersona( id ) {
        let persona = this.personas.find( p => p.id === id)

        return persona;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter( persona => persona.sala === sala)
        return personasEnSala
        
    }

    getPersonas() {
        return this.personas;
    }


    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
        this.personas =  this.personas.filter( persona => {
            return persona.id != id
        });

        return personaBorrada
    }
}


module.exports = {
    Usuarios
}