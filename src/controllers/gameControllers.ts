import { createCharacter, listCharacters, updateCharacter } from '../controllers/gameLogic';
import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { Mission, MissionType } from '../models/Mission';

const missions: Mission[] = [];

// Función para crear un nuevo personaje
export function addCharacter(type: string, name: string, level: number, health: number): Character | null {
  const character = createCharacter(type, name, level, health);
  if (character) {
    console.log(`Personaje ${name} de tipo ${type} creado con éxito.`);
    return character;
  }else{
  console.error('No se pudo crear el personaje.');
return null;
} 
}

// Función para listar todos los personajes
export function showAllCharacters(): void {
  console.log('Lista de personajes:');
  listCharacters();
}

// Función para actualizar un personaje
export function modifyCharacter(index: number, name?: string, level?: number, health?: number): void {
  updateCharacter(index, name, level, health);
}

// Crear una nueva misión
export function createMission(description: string, type: MissionType, reward: number): Mission {
  const mission = new Mission(description, 5, "Star", type);
  missions.push(mission);
  console.log(`Misión "${description}" creada con éxito.`);
  return mission;
}

// Listar todas las misiones
export function listAllMissions(): void {
  console.log('Lista de misiones:');
  missions.forEach((mission) => {
    console.log(`Descripción: ${mission.getDescription()}, Tipo: ${mission.getMissionType()}, Recompensa: ${mission.getReward()}`);
  });
}

// Asignar misión a un personaje
export function assignMissionToCharacter(character: Character, mission: Mission): void {
  console.log(`${character.getName()} ha recibido la misión: ${mission.getDescription()}`);
}

