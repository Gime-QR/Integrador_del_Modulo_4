import { createCharacter, listCharacters, updateCharacter, deleteCharacter, assignMission, completeMission, triggerEvent, acceptMultipleMissions } from '../gameControllers';
import { MissionType } from '../models/Mission';
import { Character } from '../models/Characters';
import { Warrior } from '../models/Warrior';
import { Mage } from '../models/Mage';

async function main() {
    // Crear personajes
    const warrior: Warrior = createCharacter("Arthur", 10, 150, "Warrior", 60, 40) as Warrior;
    const mage: Mage = createCharacter("Gandalf", 12, 100, "Mage", 50, 150) as Mage;

    // Listar personajes creados
    console.log("Personajes creados:");
    console.log(listCharacters());

    // Actualizar atributos de un personaje
    updateCharacter(warrior, { health: 120, experience: 500 });
    console.log(`Personaje actualizado: ${warrior.getName()} - Nivel: ${warrior.getLevel()} - Vida: ${warrior.getHealth()} - Experiencia: ${warrior.getExperience()}`);

    // Crear misiones
    const mission1 = assignMission(warrior, "Salvar la aldea", 5, 500, MissionType.Main);
    const mission2 = assignMission(mage, "Recoger hierbas mágicas", 3, 200, MissionType.Side);
    console.log("Misiones asignadas:");
    console.log(mission1, mission2);

    // Completar misiones
    try {
        await completeMission(warrior, mission1);
        await completeMission(mage, mission2);
    } catch (error) {
        console.error("Error al completar misión:", error);
    }

    // Ejecutar evento aleatorio para el guerrero
    triggerEvent(warrior);

    // Aceptar varias misiones para el mago
    const missionsList = [mission1, mission2];
    acceptMultipleMissions(mage, missionsList);

    // Eliminar personajes
    deleteCharacter(warrior);
    console.log("Personajes restantes tras eliminar a Arthur:");
    console.log(listCharacters());
}

// Ejecutar el juego
main().catch((error) => {
    console.error("Error en la ejecución del juego:", error);
});
