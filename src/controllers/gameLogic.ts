import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';

const characters: Character[] = [];

// Actualizar un personaje
export function updateCharacter(index: number, name?: string, level?: number, health?: number): void {
const character = characters[index];
if (character) {
    if (name !== undefined) character.setName(name);
    if (level !== undefined) character.setLevel(level);
    if (health !== undefined) character.setHealth(health);
    console.log(`Personaje modificado con éxito: ${character.getName()}`);
} else {
}
}
