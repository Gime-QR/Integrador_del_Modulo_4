// Warrior (sub clase)
import { Character } from './Characters';

export class Warrior extends Character {
    private attackPower: number;
    private defense: number;

    constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = [], attackPower: number = 15, defense: number = 5) {
        super(name, level, health, experience, inventory);
        this.attackPower = attackPower;
        this.defense = defense;
    }

    attack(): void {
        console.log(`${this.name} ataca con fuerza de ${this.attackPower}.`);
    }
    
    move(): void {
        console.log(`${this.name} avanza con su armadura pesada.`);
    }
    
// Método específico para Warrior
    increaseDefense(amount: number): void {
        this.defense += amount;
        console.log(`${this.name} ha aumentado su defensa a ${this.defense}`);
    }

// Método de combate específico para el Warrior
    engageInCombat(enemy: Character): string {
        const damage = this.attackPower;
        const newHealth = enemy.getHealth() - damage;
        if (enemy.getHealth() <= 0) {
            return `${this.name} ha derrotado a ${enemy.getName()} en combate.`;
        } else {
            return `${this.name} ha atacado a ${enemy.getName()} y le ha reducido la salud a ${enemy.getHealth()}.`;
        }
    }
}


