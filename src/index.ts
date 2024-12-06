import { getMissions, updateCharacter, createCharacter, listCharacters, deleteCharacter, assignMission, completeMission, triggerEvent} from './controllers/gameControllers';
import { MissionType} from './models/Mission';
import { Character }  from './models/Characters';
import { Warrior } from './models/Warrior';
import { Mage } from './models/Mage';
import { acceptMissionsWithCallback,acceptMissionsWithPromises,acceptMultipleMissions } from './controllers/gameLogic';

function storytellingIntro() {
    console.log("\n\n ✨ Bienvenido a la Aventura Épica ✨");
    console.log("\nLos héroes se preparan para su travesía:");

    // Mostrar detalles de los personajes
    console.log("\n🛡️  Héroes:");
    listCharacters().forEach((character) => {
        console.log(`- ${character.getName()} Nivel: ${character.getLevel()}, Salud: ${character.getHealth()}, 
        Experiencia: ${character.getExperience()}, Inventario: ${character.getInventory().join(", ")}`);
    });

    // Mostrar misiones asignadas
    console.log("\n⚔️  Misiones asignadas:");
    const allMissions = getMissions(); // Obtener la lista de misiones exportada
    allMissions.forEach((mission) => {
        console.log(`- "${mission.getDescription()}" Tipo: ${mission.getMissionType()}, 
        Dificultad: ${mission.getDifficulty()}, Recompensa: ${mission.getReward()}`);
    });

    console.log("\n🌟 ¡La aventura comienza ahora! 🌟");
}

async function main() {
    // Crear personajes name, level, health, type as "Warrior" | "Mage", attr1, experience, inventory)
    // Crear personajes
const warrior: Warrior = createCharacter("Arthur", 10, 50, "Warrior", 150, 40, 0, ["Espada"]) as Warrior;
const mage: Mage = createCharacter("Gandalf", 12, 100, "Mage", 15, 40, 0, ["Varita"]) as Mage;

    
    // Crear misiones
    const mission1 = assignMission(warrior, "Salvar la aldea", 5, 500, MissionType.Main);
    const mission2 = assignMission(mage, "Recoger hierbas mágicas", 3, 200, MissionType.Side);
    
    // Completar misiones
    try {
        await completeMission(warrior, mission1);
        await completeMission(mage, mission2);
    } catch (error) {
        console.error("Error al completar misión:", error);
    }

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
    console.log("1. Crea nuevos personajes");
    console.log("2. Conoce a los personajes");
    console.log("3. Elimina personajes");
    console.log("4. Actualiza personajes");
    console.log("5. Asigna una nueva misión");
    console.log("6. Activa un evento aleatorio");
    console.log("7. Lanza un hechizo");
    console.log("8. Ataca al enemigo");
    console.log("9. Finaliza el juego y ve los resultados");
}

async function mainMenu() {
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
                const experience = parseInt(prompt("Experiencia inicial: "));
                const inventory = prompt("Inventario inicial (separado por comas): ").split(",");
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
                const character = listCharacters().find(c => c.getName() === name);
            
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
            
                const newName = prompt("Nuevo nombre (deja vacío para no cambiar): ");
                const newLevel = prompt("Nuevo nivel (deja vacío para no cambiar): ");
                const newHealth = prompt("Nueva salud (deja vacío para no cambiar): ");
            
                updateCharacter(
                    name,
                    newName || undefined,
                    newLevel ? parseInt(newLevel) : undefined,
                    newHealth ? parseInt(newHealth) : undefined
                );
            
                console.log("Personaje actualizado:");
                console.log(character.getCharacterInfo());
            
                // Agregar elementos al inventario
                const addInventory = prompt("¿Deseas agregar elementos al inventario? (sí/no): ").toLowerCase();
                if (addInventory === "sí" || addInventory === "si") {
                    const item = prompt("Nombre del elemento a agregar: ");
                    if (item) {
                        character.addItemToInventory(item);
                        console.log(`Elemento "${item}" agregado al inventario de ${character.getName()}.`);
                    } else {
                        console.log("No se ingresó ningún elemento.");
                    }
                }
            
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
            case "6": { // Activar evento aleatorio
                const name = prompt("Nombre del personaje para el evento: ");
                const character = listCharacters().find((c) => c.getName() === name);
                if (!character) {
                    console.log("Personaje no encontrado.");
                    break;
                }
                await triggerEvent(character);  // Solo se llama una vez y espera a que termine antes de continuar
                break;
            }
            case "7": { // Lanzar hechizo
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
            
            case "8": { // Atacar enemigo
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
            case "9": { // Finalizar y ver resultados
                console.log("Saliendo del juego. Así ha terminado:");
                console.log("Estado final de los personajes:");
                listCharacters().forEach((character) => {
                    console.log(character.getCharacterInfo());
                });
                exit = true;
                break;
            }
            default:
                console.log("Opción no válida. Intenta de nuevo.");
        }
    }
}

// Iniciar el juego:
storytellingIntro()
// Iniciar el menú principal
mainMenu();

