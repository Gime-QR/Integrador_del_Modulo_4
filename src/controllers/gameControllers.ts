import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { Mission } from '../models/Mission';

let characters: Character[] = [];

// Función de espera para simular el tiempo que tarda el personaje en decidir qué hacer
function wait(ms: number) {
return new Promise(resolve => setTimeout(resolve, ms));
}

// Función asíncrona para manejar los eventos aleatorios
async function triggerEvent(characterName: string): Promise<void> {
const character = characters.find(c => c.getName() === characterName);

if (!character) {
    console.log(`El personaje ${characterName} no se encuentra.`);
    return;
}

console.log(`Evento aleatorio generado para ${characterName}...`);

try {
// Simulamos un tiempo de espera (como si el personaje estuviera pensando)
    console.log(`${characterName} está decidiendo qué hacer...`);
    await wait(2000);  // Espera de 2 segundos (simulando la espera para la respuesta del personaje)

// Evento aleatorio (puede ser 'encuentro' o 'recompensa')
    const eventType = Math.random() < 0.5 ? 'encuentro' : 'recompensa';

// Verificamos si el personaje tiene suficiente salud para participar en el evento
    if (character.getHealth() <= 20) {
      // Si el personaje tiene poca salud, lanzamos un error
    throw new Error(`${characterName} tiene poca salud para participar en el evento.`);
    }

// El personaje responde al evento
    console.log(`${characterName} ha decidido participar en un evento de tipo: ${eventType}`);

    if (eventType === 'encuentro') {
    console.log(`${characterName} se enfrenta a un enemigo.`);
      // Simulamos una condición donde el personaje necesita tener un nivel mínimo para ganar
    if (character.getLevel() >= 5) {
        console.log(`${characterName} ha derrotado al enemigo y gana experiencia.`);
        character.setExperience(character.getExperience() + 10);  // Gana 10 de experiencia
    } else {
        console.log(`${characterName} no tiene el nivel suficiente para derrotar al enemigo.`);
    }
    } else {
    console.log(`${characterName} ha encontrado una recompensa.`);
      // Simulamos una recompensa (por ejemplo, aumentar la salud)
      character.setHealth(character.getHealth() + 30);  // Aumenta 30 de salud
    console.log(`${characterName} ahora tiene ${character.getHealth()} de salud.`);
    }
} catch (error) {
    // Manejo de errores
    console.log(`Error al activar evento para ${characterName}: ${error.message}`);
}
}

// Función para iniciar la simulación de eventos aleatorios periódicos
function startEventSimulation() {
setInterval(() => {
    // Seleccionamos un personaje aleatorio para activar un evento
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    triggerEvent(randomCharacter.getName());  // Activamos un evento para ese personaje
  }, 5000);  // Intervalo de 5 segundos
}

// Función para crear un personaje (para pruebas)
function createCharacter(name: string, level: number, health: number, type: 'Warrior' | 'Mage'): Character {
let newCharacter: Character;

// Dependiendo del tipo de personaje, se crea un Warrior o un Mage
if (type === 'Warrior') {
    newCharacter = new Warrior(name, level, health);
} else {
    newCharacter = new Mage(name, level, health);
}

characters.push(newCharacter);
return newCharacter;
}

export { createCharacter, triggerEvent, startEventSimulation };
