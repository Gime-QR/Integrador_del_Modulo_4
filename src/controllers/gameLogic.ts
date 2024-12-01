import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';

const characters: Character[] = [];

// Crear un nuevo personaje
export function createCharacter(type: string, name: string, level: number, health: number): Character | null {
    let newCharacter: Character;

    if (type === 'Mage') {
        newCharacter = new Mage("Harry", 4, 20, 5, 6);
    } else if (type === 'Warrior') {
        newCharacter = new Warrior("Leonardo", 5, 30, 6, 7);
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
