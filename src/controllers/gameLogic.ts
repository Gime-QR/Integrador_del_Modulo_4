import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { Mission } from '../models/Mission';
import { eventNames } from 'process';

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


 class Event{
    manejarEvento(): void {
        console.log("Manejando evento del juego");
        
    }
}

class EventSorpresa extends Event{
    manejarEvento(): void{
        console.log("Evento Sorpresa");
        
    }
}
class EventRecompensa extends Event{
    manejarEvento(): void {
        console.log("Obtención de recompensa");
        
    }
}

function triggerEvent(evento:Event):void {
    if (EventSorpresa) {
        return evento.manejarEvento()
   }else if (EventSorpresa){
    return evento.manejarEvento()
   }else{
    throw new Error("no encontrado")
   }
    
}