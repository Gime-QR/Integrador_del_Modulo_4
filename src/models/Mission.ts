import { Character } from './Characters';

export enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event"
}

export default class Mission {
    private description: string;
    private difficulty: number;
    private reward: string;
    private missionType: MissionType;
    private completed: boolean; // Nueva propiedad para marcar la misión como completada

    constructor(description: string, difficulty: number, reward: string, missionType: MissionType) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.missionType = missionType;
        this.completed = false; // Inicializamos como no completada
    }

    getDescription(): string {
        return this.description;
    }

    getDifficulty(): number {
        return this.difficulty;
    }

    getReward(): string {
        return this.reward;
    }

    getMissionType(): MissionType {
        return this.missionType;
    }

    isCompleted(): boolean {
        return this.completed; // Método para obtener el estado de la misión
    }

    setDescription(description: string): void {
        this.description = description;
    }

    setDifficulty(difficulty: number): void {
        if (difficulty >= 1 && difficulty <= 10) {
            this.difficulty = difficulty;
        }
    }

    setReward(reward: string): void {
        this.reward = reward;
    }

    setMissionType(missionType: MissionType): void {
        this.missionType = missionType;
    }

    // Método para completar la misión y entregar la recompensa
    completeMission(character: Character): string {
        if (this.completed) {
            return `La misión "${this.description}" ya fue completada.`;
        } else {
            character.addToInventory(this.reward); // Añadir la recompensa al inventario del personaje
            this.completed = true; // Marcar la misión como completada
            return `La misión "${this.description}" ha sido completada. ${character.getName()} ha recibido ${this.reward}.`;
        }
    }
}
