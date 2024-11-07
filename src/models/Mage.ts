// Mage (sub clase)
import { Character } from './Characters';

export class Mage extends Character {
    private magicPower: number;
    private mana: number;

    constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = [], magicPower: number = 15, mana: number = 100) {
        super(name, level, health, experience, inventory);
        this.magicPower = magicPower;
        this.mana = mana;
    }

    getMagicPower(): number {
        return this.magicPower;
    }

    getMana(): number {
        return this.mana;
    }

    setMagicPower(magicPower: number): void {
        this.magicPower = magicPower;
    }

    setMana(mana: number): void {
        this.mana = mana;
    }

// Método específico para Mage
    castSpell(): string {
        if (this.mana >= 10) {
            this.mana -= 10;
            console.log(`${this.name} ha lanzado un hechizo con poder mágico de ${this.magicPower}`);
            return `Hechizo lanzado con poder mágico de ${this.magicPower}. Mana restante: ${this.mana}`;
        } else {
            return `${this.name} no tiene suficiente mana para lanzar un hechizo.`;
        }
    }

// Método de recuperación de maná
    recoverMana(amount: number): void {
        this.mana += amount;
        console.log(`${this.name} ha recuperado ${amount} de mana. Mana actual: ${this.mana}`);
    }
}
