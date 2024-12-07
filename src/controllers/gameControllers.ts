import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { Mission, MissionType } from '../models/Mission';
import { calculateExperience } from '../gameHelpers';


// Lista de personajes y misiones
export let characters: Character[] = [];
export let missions: Mission[] = [];

// Crear un nuevo personaje
export function createCharacter(name: string, level: number, health: number, type: "Warrior" | "Mage", attackOrMagicPower: number, defenseOrMana: number, experience: number, inventory: string[] = []): Character {
  let character: Character;

  if (type === "Warrior") {
      character = new Warrior(name, level, health, attackOrMagicPower, defenseOrMana, experience, inventory);
  } else if (type === "Mage") {
      character = new Mage(name, level, health, attackOrMagicPower, defenseOrMana, experience, inventory);
  } else {
      throw new Error("Tipo de personaje inválido.");
  }

  characters.push(character);  // Agrega el personaje a la lista
  return character;

}
// Listar todos los personajes
export function listCharacters(): Character[] {
    return characters;
}
// Eliminar un personaje
export function deleteCharacter(name: string): void {
    const index = characters.findIndex(c => c.getName() === name);
    if (index === -1) {
        console.error("Personaje no encontrado.");
        return;
    }

    characters.splice(index, 1);
    console.log(`${name} ha sido eliminado.`);
}

// Actualizar un personaje
export function updateCharacter(name: string, newName?: string, newLevel?: number, newHealth?: number): void {
  const character = characters.find(c => c.getName() === name);
  if (character) {
      if (newName !== undefined) character.setName(newName);
      if (newLevel !== undefined) character.setLevel(newLevel);
      if (newHealth !== undefined) character.setHealth(newHealth);
      console.log(`Personaje modificado con éxito: ${character.getName()}`);
  } else {
      console.log("Personaje no encontrado.");
  }
}

// Asignar una misión a un personaje
export function assignMission(character: Character, description: string, difficulty: number, reward: number, missionType: MissionType): Mission {
    const mission = new Mission(description, difficulty, reward, missionType);
    missions.push(mission);
    return mission;
}

// Completar una misión
export function completeMission(character: Character, mission: Mission): Promise<string> {
    return new Promise((resolve, reject) => {
        // Determinar si el personaje tiene éxito en la misión basándose en el nivel y la dificultad
        const success = character.getLevel() >= mission.getDifficulty();
        if (success) {
            character.setExperience(character.getExperience() + mission.getReward());
            resolve(`${character.getName()} ha completado la misión con éxito y ha ganado ${mission.getReward()} puntos de experiencia.`);
        } else {
            reject(`${character.getName()} no ha tenido éxito en la misión. La dificultad era demasiado alta.`);
        }
    });
}

export async function triggerEvent(character: Character): Promise<void> {
  try {
      console.log(`Calculando el resultado de la misión del personaje ${character.getName()}...`);
      
      // Simular un evento de espera con un retraso aleatorio
      const randomDelay = Math.floor(Math.random() * 3000) + 1000;  // Tiempo entre 1-4 segundos
      console.log(`Esperando resultado...`);
      await new Promise(resolve => setTimeout(resolve, randomDelay));
      
      // Simular un resultado del evento
      const eventOutcome = Math.random() > 0.5 ? "evento positivo" : "evento negativo";
      
      if (eventOutcome === "evento positivo") {
          const reward = Math.floor(Math.random() * 500) + 100;  // Recompensa aleatoria entre 100 y 500
          character.setExperience(character.getExperience() + reward);
          console.log(`${character.getName()} ha tenido un ${eventOutcome} y ha ganado ${reward} puntos de experiencia.`);
      } else {
          const damage = Math.floor(Math.random() * 50) + 10;  // Daño aleatorio entre 10 y 50
          character.setHealth(character.getHealth() - damage);
          console.log(`${character.getName()} ha tenido un ${eventOutcome} y ha perdido ${damage} de salud.`);
      }
  } catch (error) {
      console.error("Error al activar el evento:", error);
  }
}

// Exportar la lista de misiones
export function getMissions(): Mission[] {
  return missions;
}
