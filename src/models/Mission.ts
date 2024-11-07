export enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event"
}

export class Mission {
    private description: string;
    private difficulty: number;
    private reward: string;
    private missionType: MissionType;

    constructor(description: string, difficulty: number, reward: string, missionType: MissionType) {
        this.description = description;
        this.difficulty = difficulty;
        this.reward = reward;
        this.missionType = missionType;
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
}
