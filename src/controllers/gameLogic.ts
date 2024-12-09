import { Character } from '../models/Characters';
import {completeMission } from './gameControllers';
import { Mission } from '../models/Mission';

const characters: Character[] = [];

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

// Función para aceptar misiones con un callback
export function acceptMissionsWithCallback(character: Character, missionsList: Mission[], callback: (result: string) => void): void {
    let currentMissionIndex = 0;

    function completeNextMission(): void {
        if (currentMissionIndex < missionsList.length) {
            const mission = missionsList[currentMissionIndex];
            completeMission(character, mission).then(result => {
                callback(result);
                currentMissionIndex++;
                completeNextMission();  
            }).catch(error => {
                callback(error); 
            });
        }
    }

    completeNextMission();  // Iniciamos el proceso de completar misiones
}
