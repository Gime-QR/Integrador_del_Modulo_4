// Warrior (sub clase)
import { Character } from './Characters';

export class Warrior extends Character {
    private attack: number;
    private defense: number;

    constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = [], attack: number = 10, defense: number = 5) {
        super(name, level, health, experience, inventory);
        this.attack = attack;
        this.defense = defense;
    }

    getAttack(): number {
        return this.attack;
    }

    getDefense(): number {
        return this.defense;
    }

    setAttack(attack: number): void {
        this.attack = attack;
    }

    setDefense(defense: number): void {
        this.defense = defense;
    }

// Método específico para Warrior
    increaseDefense(amount: number): void {
        this.defense += amount;
        console.log(`${this.name} ha aumentado su defensa a ${this.defense}`);
    }

// Método de combate específico para el Warrior
    engageInCombat(enemy: Character): string {
        if (this.attack > enemy.getHealth()) {
            return `${this.name} ha derrotado a ${enemy.getName()} en combate.`;
        } else {
            return `${this.name} ha atacado a ${enemy.getName()} pero no logró derrotarlo.`;
        }
    }
}
