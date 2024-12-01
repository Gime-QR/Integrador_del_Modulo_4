export enum MissionType {
    Main = "Main",  // Misión principal
    Side = "Side",  // Misión secundaria
    Event = "Event"  // Misión de evento
}

export class Mission {
    private description: string;  // Descripción de la misión
    private difficulty: number;   // Nivel de dificultad de la misión
    private reward: number;       // Recompensa al completar la misión
    private missionType: MissionType;  // Tipo de misión (Main, Side, Event)

    constructor(description: string, difficulty: number, reward: number, missionType: MissionType) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.missionType = missionType;
    }

    // Métodos de acceso (getters)
    getDescription(): string {
        return this.description;
    }

    getDifficulty(): number {
        return this.difficulty;
    }

    getReward(): number {
        return this.reward;
    }

    getMissionType(): MissionType {
        return this.missionType;
    }

    // Métodos de modificación (setters)
    setDescription(description: string): void {
        try {
            if (description && description.length > 0) {
                this.description = description;
            } else {
                throw new Error("La descripción no puede estar vacía.");
            }
        } catch (error) {
            console.error("Error al establecer la descripción:", error);
        }
    }

    setDifficulty(difficulty: number): void {
        try {
            if (difficulty > 0) {
                this.difficulty = difficulty;
            } else {
                throw new Error("La dificultad debe ser un número mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer la dificultad:", error);
        }
    }

    setReward(reward: number): void {
        try {
            if (reward > 0) {
                this.reward = reward;
            } else {
                throw new Error("La recompensa debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer la recompensa:", error);
        }
    }

    setMissionType(missionType: MissionType): void {
        try {
            if (Object.values(MissionType).includes(missionType)) {
                this.missionType = missionType;
            } else {
                throw new Error("Tipo de misión inválido.");
            }
        } catch (error) {
            console.error("Error al establecer el tipo de misión:", error);
        }
    }

    // Método para mostrar la información de la misión
    getMissionInfo(): string {
        return `Descripción: ${this.description}, Dificultad: ${this.difficulty}, Recompensa: ${this.reward}, Tipo de Misión: ${this.missionType}`;
    }
}
