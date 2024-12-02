
import { createCharacter, assignMission, completeMission, listMissions, updateCharacter, deleteCharacter } from '../src/controllers/gameLogic';
import { Mission } from '../models/Mission';


// Paso 1: Crear personajes
const thor = createCharacter('Thor',5, 150, 'Warrior');
const merlin = createCharacter('Merlin', 6, 100, 'Mage');
const artemis = createCharacter('Artemis', 3, 120, 'Warrior');

// Paso 2: Crear misiones
const mission1 = new Mission('Recoger hierbas mágicas', 3, '100 de oro');
const mission2 = new Mission('Defender el reino', 6, 'Espada mágica');
const mission3 = new Mission('Destruir el dragón', 8, 'Poderoso hechizo');

// Paso 3: Asignar misiones a los personajes
assignMission('Thor', mission1);
assignMission('Merlin', mission2);
assignMission('Thor', mission3);
assignMission('Artemis', mission1);

// Mostrar misiones asignadas
console.log("Misiones de Thor:", listMissions('Thor'));
console.log("Misiones de Merlin:", listMissions('Merlin'));
console.log("Misiones de Artemis:", listMissions('Artemis'));

// Paso 4: Actualizar personajes
console.log("\nActualizando personajes...");
updateCharacter('Thor', 6, 160); // Subir nivel y salud de Thor
updateCharacter('Artemis', 5, 130); // Subir nivel y salud de Artemis

// Mostrar misiones después de la actualización de personajes
console.log("\nMisiones de Thor después de la actualización:", listMissions('Thor'));
console.log("Misiones de Artemis después de la actualización:", listMissions('Artemis'));

// Paso 5: Completar misiones
console.log("\nCompletando misiones...");
completeMission('Thor', 'Recoger hierbas mágicas');  // Debería ser exitosa
completeMission('Merlin', 'Defender el reino');  // Debería ser exitosa
completeMission('Thor', 'Destruir el dragón');  // Debería fallar debido a la dificultad
completeMission('Artemis', 'Recoger hierbas mágicas');  // Debería ser exitosa

// Paso 6: Ver estado de las misiones después de completarlas
console.log("\nMisiones de Thor después de completar algunas:", listMissions('Thor'));
console.log("Misiones de Merlin después de completar:", listMissions('Merlin'));
console.log("Misiones de Artemis después de completar:", listMissions('Artemis'));

// Paso 7: Eliminar personajes
console.log("\nEliminando personajes...");
deleteCharacter('Artemis');  // Eliminar a Artemis

// Mostrar la lista de personajes después de eliminar a Artemis
console.log("\nLista de personajes después de la eliminación:");
console.log("Misiones de Thor:", listMissions('Thor'));
console.log("Misiones de Merlin:", listMissions('Merlin'));

// Intentamos eliminar un personaje que no existe
deleteCharacter('Artemis');  // Intentar eliminar un personaje no existente
