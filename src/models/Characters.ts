// Characters
export class Character {
    protected name: string;
    protected level: number;
    protected health: number;
    protected experience: number;
    protected inventory: string[];

    constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = []) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience;
        this.inventory = inventory;
    }

// Métodos getter
    getName(): string {
        return this.name;
    }

    getLevel(): number {
        return this.level;
    }

    getHealth(): number {
        return this.health;
    }

    getExperience(): number {
        return this.experience;
    }

    getInventory(): string[] {
        return this.inventory;
    }

// Métodos setter
    setName(name: string): void {
        this.name = name;
    }

    setLevel(level: number): void {
        if (level > 0) this.level = level;
    }

    setHealth(health: number): void {
        if (health >= 0) this.health = health;
    }

    setExperience(experience: number): void {
        if (experience >= 0) this.experience = experience;
    }

    setInventory(inventory: string[]): void {
        this.inventory = inventory;
    }

// Métodos adicionales
    addItemToInventory(item: string): void {
        this.inventory.push(item);
    }

    removeItemFromInventory(item: string): void {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
            this.inventory.splice(index, 1);
        }
    }

    gainExperience(amount: number): void {
        if (amount > 0) {
            this.experience += amount;
        }
    }

    levelUp(): void {
        if (this.experience >= 100) {
            this.level++;
            this.experience = 0;
            console.log(`${this.name} ha subido al nivel ${this.level}!`);
        }
    }
}
