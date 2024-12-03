import { Character } from './Characters';  // Importar la clase base Character

export class Mage extends Character {
    private magicPower: number;  // Poder mágico del mago
    private mana: number;  // Mana del mago

    constructor(name: string, level: number, health: number, magicPower: number, mana: number, experience: number, inventory: string []) {
        super(name, level, health, experience, inventory);  // Llamar al constructor de la clase base
        this.magicPower = magicPower;
        this.mana = mana;
    }

    // Métodos de acceso (getters) para los atributos adicionales
    getMagicPower(): number {
        return this.magicPower;
    }

    getMana(): number {
        return this.mana;
    }

    // Métodos de modificación (setters) para los atributos adicionales
    setMagicPower(magicPower: number): void {
        try {
            if (magicPower > 0) {
                this.magicPower = magicPower;
            } else {
                throw new Error("El poder mágico debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer el poder mágico:", error);
        }
    }

    setMana(mana: number): void {
        try {
            if (mana >= 0) {  // El mana no puede ser negativo
                this.mana = mana;
            } else {
                throw new Error("El mana no puede ser negativo.");
            }
        } catch (error) {
            console.error("Error al establecer el mana:", error);
        }
    }

    // Método para lanzar un hechizo
    castSpell(spellCost: number): void {
        try {
            if (this.mana >= spellCost) {
                this.mana -= spellCost;  // Reducir mana por el coste del hechizo
                console.log(`${this.getName()} ha lanzado un hechizo exitosamente.`);
            } else {
                throw new Error(`No tienes suficiente mana para lanzar este hechizo. Mana restante: ${this.mana}`);
            }
        } catch (error) {
            console.error("Error al lanzar hechizo:", error);
        }
    }

    // Método para regenerar mana
    regenerateMana(amount: number): void {
        try {
            if (amount > 0) {
                this.mana += amount;
                console.log(`${this.getName()} ha regenerado ${amount} de mana. Mana actual: ${this.mana}`);
            } else {
                throw new Error("La cantidad de mana a regenerar debe ser positiva.");
            }
        } catch (error) {
            console.error("Error al regenerar mana:", error);
        }
    }

    // Método para mostrar información del Mage
    getMageInfo(): string {
        return `${this.getCharacterInfo()}, Poder Mágico: ${this.magicPower}, Mana: ${this.mana}`;
    }
}
