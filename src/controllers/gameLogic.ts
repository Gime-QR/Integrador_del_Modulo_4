import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';
import { assignMission,completeMission } from './gameControllers';
import { Mission } from '../models/Mission';



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


// Función para aceptar múltiples misiones
export async function acceptMultipleMissions(character: Character, missionsList: Mission[]): Promise<void> {
    for (let mission of missionsList) {
        try {
            await completeMission(character, mission);
            console.log(`Misión completada: ${mission.getDescription()}`);
        } catch (error) {
            console.error(error);
            break;  // Si falla una misión, interrumpimos el ciclo
        }
    }
}

// Función para encadenar misiones usando promesas
export function acceptMissionsWithPromises(character: Character, missionsList: Mission[]): void {
    let promiseChain = Promise.resolve();

    missionsList.forEach(mission => {
        promiseChain = promiseChain.then(() => {
            return completeMission(character, mission).then(result => {
                console.log(result);
            }).catch(error => {
                console.error(error);
            });
        });
    });
}

// Función para aceptar misiones con un callback
export function acceptMissionsWithCallback(character: Character, missionsList: Mission[], callback: (result: string) => void): void {
    let currentMissionIndex = 0;

    function completeNextMission(): void {
        if (currentMissionIndex < missionsList.length) {
            const mission = missionsList[currentMissionIndex];
            completeMission(character, mission).then(result => {
                callback(result);
                currentMissionIndex++;
                completeNextMission();  // Llamamos recursivamente para la siguiente misión
            }).catch(error => {
                callback(error);  // Si falla, llamamos al callback con el error
            });
        }
    }

    completeNextMission();  // Iniciamos el proceso de completar misiones
}
