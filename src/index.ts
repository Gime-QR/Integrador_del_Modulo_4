import { createCharacter, listCharacters, deleteCharacter, assignMission, completeMission, triggerEvent, acceptMultipleMissions } from './controllers/gameControllers';
import { MissionType } from './models/Mission';
import { Character } from './models/Characters';
import { Warrior } from './models/Warrior';
import { Mage } from './models/Mage';
import { updateCharacter } from './controllers/gameLogic';

async function main() {
    // Crear personajes
    const warrior: Warrior = createCharacter("Arthur", 10, 150, "Warrior", 60, 40) as Warrior;
    const mage: Mage = createCharacter("Gandalf", 12, 100, "Mage", 50, 150) as Mage;

    // Listar personajes creados
    console.log("Personajes creados:");
    console.log(listCharacters());

    // Actualizar un personaje
console.log("\nActualizando personajes...");
updateCharacter(1,'Thor', 6, 160); // Subir nivel y salud de Thor
updateCharacter(2, 'Artemis', 5, 130); // Subir nivel y salud de Artemis

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
    deleteCharacter("warrior");
    console.log("Personajes restantes tras eliminar a Arthur:");
    console.log(listCharacters());
}

// Ejecutar el juego
main().catch((error) => {
    console.error("Error en la ejecución del juego:", error);
});

//Menu://
const prompt = require('prompt-sync')();

// Mostrar el menú principal
function showMenu() {
    console.log("\n--- Menú Principal ---");
    console.log("1. Crear personaje");
    console.log("2. Listar personajes");
    console.log("3. Eliminar personaje");
    console.log("4. Asignar misión");
    console.log("5. Completar misión");
    console.log("6. Activar evento aleatorio");
    console.log("7. Salir");
}

// Ejecutar el menú principal
function mainMenu() {
    let exit = false;

    while (!exit) {
        showMenu();
        const choice = prompt("Selecciona una opción: ");

        switch (choice) {
            case "1": {
                const name = prompt("Nombre del personaje: ");
                const type = prompt("Tipo (Warrior/Mage): ");
                const level = parseInt(prompt("Nivel inicial: "));
                const health = parseInt(prompt("Salud inicial: "));
                const attr1 = parseInt(prompt(type === "Warrior" ? "Ataque inicial: " : "Poder mágico inicial: "));
                const attr2 = parseInt(prompt(type === "Warrior" ? "Defensa inicial: " : "Mana inicial: "));
                createCharacter(name, level, health, type as "Warrior" | "Mage", attr1, attr2);
                break;
            }
            case "2":
                console.log("Lista de personajes:");
                listCharacters().forEach(c => console.log(c.getCharacterInfo()));
                break;
            case "3": {
                const name = prompt("Nombre del personaje a eliminar: ");
                deleteCharacter(name);
                break;
            }
            case "4": {
                const name = prompt("Nombre del personaje: ");
                const character = listCharacters().find(c => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                const description = prompt("Descripción de la misión: ");
                const difficulty = parseInt(prompt("Dificultad: "));
                const reward = parseInt(prompt("Recompensa: "));
                const missionType = prompt("Tipo de misión (Main/Side/Event): ") as MissionType;
                assignMission(character, description, difficulty, reward, missionType);
                break;
            }
            case "5": {
                const name = prompt("Nombre del personaje: ");
                const character = listCharacters().find(c => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                const missionDescription = prompt("Descripción de la misión a completar: ");
                const mission = assignMission(character, missionDescription, 0, 0, MissionType.Main); // Aquí deberías buscar la misión real
                completeMission(character, mission).then(console.log).catch(console.error);
                break;
            }
            case "6": {
                const name = prompt("Nombre del personaje para el evento: ");
                const character = listCharacters().find(c => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                triggerEvent(character);
                break;
            }
            case "7":
                console.log("Saliendo del juego. ¡Hasta pronto!");
                exit = true;
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    }
}

// Iniciar el menú principal
mainMenu();
