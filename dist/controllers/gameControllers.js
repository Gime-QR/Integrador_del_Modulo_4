"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCharacter = createCharacter;
exports.listCharacters = listCharacters;
exports.assignMission = assignMission;
exports.completeMission = completeMission;
exports.createMission = createMission;
exports.listMissions = listMissions;
const Warriors_1 = require("./src/models/Warriors");
const Mage_1 = require("./src/models/Mage");
const Mission_1 = require("./src/models/Mission");
// Lista para almacenar personajes y misiones
const characters = [];
const missions = [];
// Función para crear un nuevo personaje
function createCharacter(type, name) {
    let newCharacter;
    if (type === 'Mage') {
        newCharacter = new Mage_1.Mage(name, 100, 10, 50);
    }
    else if (type === 'Warrior') {
        newCharacter = new Warriors_1.Warrior(name, 150, 15, 5);
    }
    else {
        console.error('Tipo de personaje no válido');
        return null;
    }
    characters.push(newCharacter);
    return newCharacter;
}
// Función para listar todos los personajes
function listCharacters() {
    return characters;
}
// Función para asignar una misión a un personaje
function assignMission(character, mission) {
    character.addMission(mission);
    console.log(`${character.getName()} ha recibido la misión: ${mission.getName()}`);
}
// Función para completar una misión y otorgar recompensa
function completeMission(character, mission) {
    if (character.completeMission(mission)) {
        console.log(`${character.getName()} ha completado la misión: ${mission.getName()}`);
        character.gainExperience(mission.getReward());
    }
    else {
        console.log(`${character.getName()} no tiene esta misión asignada.`);
    }
}
// Función para crear una misión
function createMission(name, type, reward) {
    const newMission = new Mission_1.Mission(name, type, reward);
    missions.push(newMission);
    return newMission;
}
// Función para listar todas las misiones
function listMissions() {
    return missions;
}
