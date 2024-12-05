import { updateCharacter, createCharacter, listCharacters, deleteCharacter, assignMission, completeMission, triggerEvent} from './controllers/gameControllers';
import { MissionType } from './models/Mission';
import { Character} from './models/Characters';
import { Warrior } from './models/Warrior';
import { Mage } from './models/Mage';
import { acceptMissionsWithCallback,acceptMissionsWithPromises,acceptMultipleMissions } from './controllers/gameLogic';

async function main() {
    // Crear personajes name, level, health, type as "Warrior" | "Mage", attr1, experience, inventory)
    const warrior: Warrior = createCharacter("Arthur", 10, 50, "Warrior", 150, 40, 0, []) as Warrior;
    const mage: Mage = createCharacter("Gandalf", 12, 100, "Mage", 15, 40, 10, []) as Mage;
    
    // Listar personajes creados
    console.log("Personajes creados:");
    console.log(listCharacters());
    
     // Actualizar un personaje
    updateCharacter(0,'Gandalf', 6, 160); // Subir nivel y salud de Thor
    updateCharacter(1,'Arthur', 5, 130); // Subir nivel y salud de Artemis
   
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
    deleteCharacter("");
}

// Ejecutar el juego
main().catch((error) => {
    console.error("Error en la ejecución del juego:", error);
});

//Menu://
const prompt = require("prompt-sync")();

// Mostrar el menú principal
function showMenu() {
    console.log("\n--- Menú Principal ---");
    console.log("1. Crear personaje");
    console.log("2. Listar personajes");
    console.log("3. Eliminar personaje");
    console.log("4. Actualizar personaje");
    console.log("5. Asignar misión");
    console.log("6. Completar misión");
    console.log("7. Activar evento aleatorio");
    console.log("8. Lanzar hechizo");
    console.log("9. Atacar enemigo");
    console.log("10. Finalizar y ver resultados");
}

// Ejecutar el menú principal
function mainMenu() {
    let exit = false;

    while (!exit) {
        showMenu();
        const choice = prompt("Selecciona una opción: ");

        switch (choice) {
            case "1": { // Crear personaje
                const name = prompt("Nombre del personaje: ");
                const type = prompt("Tipo (Warrior/Mage): ");
                const level = parseInt(prompt("Nivel inicial: "));
                const health = parseInt(prompt("Salud inicial: "));
                const attr1 = parseInt(prompt(type === "Warrior" ? "Ataque inicial: " : "Poder mágico inicial: "));
                const attr2 = parseInt(prompt(type === "Warrior" ? "Defensa inicial: " : "Mana inicial: "));
                const experience = parseInt (prompt ("Experiencia: "));
                const inventory = prompt ("Inventory: ");
                createCharacter(name, level, health, type as "Warrior" | "Mage", attr1, attr2, experience, inventory);
                break;
            }
            case "2": { // Listar personajes
                console.log("Lista de personajes:");
                listCharacters().forEach((c) => console.log(c.getCharacterInfo()));
                break;
            }
            case "3": { // Eliminar personaje
                const name = prompt("Nombre del personaje a eliminar: ");
                deleteCharacter(name);
                break;
            }
            case "4": { // Actualizar personaje
                const name = prompt("Nombre del personaje a actualizar: ");
                const characterIndex = listCharacters().findIndex(c => c.getName() === name);

                if (characterIndex === -1) {
                    console.log("Personaje no encontrado.");
                    break;
                }

                const newName = prompt("Nuevo nombre (deja vacío para no cambiar): ");
                const newLevel = prompt("Nuevo nivel (deja vacío para no cambiar): ");
                const newHealth = prompt("Nueva salud (deja vacío para no cambiar): ");

                updateCharacter(
                    characterIndex,
                    newName || undefined,
                    newLevel ? parseInt(newLevel) : undefined,
                    newHealth ? parseInt(newHealth) : undefined
                );

                console.log(`Personaje actualizado: ${listCharacters()[characterIndex].getCharacterInfo()}`);
                break;
            }
            case "5": { // Asignar misión
                const name = prompt("Nombre del personaje: ");
                const character = listCharacters().find((c) => c.getName() === name);
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
            case "6": { // Completar misión
                const name = prompt("Nombre del personaje: ");
                const character = listCharacters().find(c => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                const missionDescription = prompt(`"Descripción de la misión a completar: "`);
              const mission2 = assignMission(character, missionDescription, 15,0, MissionType.Main); // Aquí deberías buscar la misión real
              completeMission(character, mission2).then(console.log).catch(console.error);
            
           break;
            }
            case "7": { // Activar evento aleatorio
                const name = prompt("Nombre del personaje para el evento: ");
                const character = listCharacters().find((c) => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                triggerEvent(character);
                break;
            }
            case "8": { // Lanzar hechizo
                const name = prompt("Nombre del mago: ");
                const character = listCharacters().find((c) => c.getName() === name);
                if (!character || !(character instanceof Mage)) {
                    console.log("Personaje no encontrado o no es un mago.");
                    break;
                }
                const spellCost = parseInt(prompt("Costo del hechizo: "));
                (character as Mage).castSpell(spellCost);
                break;
            }
            case "9": { // Atacar enemigo
                const attackerName = prompt("Nombre del atacante (Warrior): ");
                const defenderName = prompt("Nombre del defensor: ");
                const attacker = listCharacters().find((c) => c.getName() === attackerName);
                const defender = listCharacters().find((c) => c.getName() === defenderName);
                if (!attacker || !(attacker instanceof Warrior) || !defender) {
                    console.log("Atacante o defensor no válido.");
                    break;
                }
                (attacker as Warrior).attackEnemy(defender);
                break;
            }
            case "10": // Ver resultados
                console.log("Saliendo del juego. Así ha termiando");
                exit = true;
                break;
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    }
}

// Iniciar el menú principal
mainMenu();
