"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = exports.MissionType = void 0;
var MissionType;
(function (MissionType) {
    MissionType["Main"] = "Main";
    MissionType["Side"] = "Side";
    MissionType["Event"] = "Event";
})(MissionType || (exports.MissionType = MissionType = {}));
class Mission {
    constructor(description, difficulty, reward, missionType) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.missionType = missionType;
        this.completed = false; // Inicializamos como no completada
    }
    getDescription() {
        return this.description;
    }
    getDifficulty() {
        return this.difficulty;
    }
    getReward() {
        return this.reward;
    }
    getMissionType() {
        return this.missionType;
    }
    isCompleted() {
        return this.completed; // Método para obtener el estado de la misión
    }
    setDescription(description) {
        this.description = description;
    }
    setDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 10) {
            this.difficulty = difficulty;
        }
    }
    setReward(reward) {
        this.reward = reward;
    }
    setMissionType(missionType) {
        this.missionType = missionType;
    }
    // Método para completar la misión y entregar la recompensa
    completeMission(character) {
        if (this.completed) {
            return `La misión "${this.description}" ya fue completada.`;
        }
        else {
            character.addItemToInventory(this.reward); // Añadir la recompensa al inventario del personaje
            this.completed = true; // Marcar la misión como completada
            return `La misión "${this.description}" ha sido completada. ${character.getName()} ha recibido ${this.reward}.`;
        }
    }
}
exports.Mission = Mission;
