
import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { Mission, MissionType } from '../models/Mission';
import { eventNames } from 'process';
import { resolve } from 'path';

const characters: Character[] = [];

// Crear un nuevo personaje
export function createCharacter(type: string, name: string, level: number, health: number): Character | null {
    let newCharacter: Character;

    if (type === 'Mage') {
        newCharacter = new Mage(name, level, health);
    } else if (type === 'Warrior') {
        newCharacter = new Warrior(name, level, health);
    } else {
        console.error('Tipo de personaje no válido');
        return null; // Devuelve null en lugar de terminar con void
    }

    characters.push(newCharacter);
    console.log(`Personaje: ${name} agregado con éxito!`);
    return newCharacter; // Devuelve el nuevo personaje
}
// Listar todos los personajes
export function listCharacters(): void {
    console.log("Lista de Personajes:");
    characters.forEach((character) => {
        console.log(`Nombre: ${character.getName()}, Nivel: ${character.getLevel()}, Salud: ${character.getHealth()}`);
    });
}

// Actualizar un personaje
export function updateCharacter(index: number, name?: string, level?: number, health?: number): void {
    const character = characters[index];
    if (character) {
        if (name !== undefined) character.setName(name);
        if (level !== undefined) character.setLevel(level);
        if (health !== undefined) character.setHealth(health);
        console.log(`Personaje modificado con éxito: ${character.getName()}`);
    } else {
        console.log(`Personaje no encontrado`);
    }
}

class Evento {
    manejarEvento(): void {
        console.log("Evento Sorpresa");
    }
}

class EventoMision extends Evento {
    manejarEvento(): void {
        
    }
}
class EventoBeneficio extends Evento {
    manejarEvento(): void {

    }
}

function gestionarEvento(evento:Evento): void {
    evento.manejarEvento()
}

let eventoMision: Evento = new EventoMision() 
let eventoBeneficio: Evento = new EventoBeneficio()


async function triggerEvent(evento: Event) {
    if (evento) {
     this.gestionarEvento().eventoMision
        }else {
      this.gestionarEvento().eventoBeneficio
    }

}

//funcion para respuesta de los personajes para cuando acepte o no el evento
async function respuestCharacter() {
try {
    const respuesta = await triggerEvent
    console.log(respuesta);
    
} catch (error){
console.log(`No acepta el evento`,error);

}
}