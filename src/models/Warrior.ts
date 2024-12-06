import { Character } from './Characters';  // Importar la clase base Character

export class Warrior extends Character {
    private attack: number;  // Atributo de ataque del guerrero
    private defense: number;  // Atributo de defensa del guerrero
    
    constructor(name: string, level: number, health: number, attack: number, defense: number, experience: number, inventory: string []) {
        super(name, level, health, experience, inventory);  // Llamar al constructor de la clase base
        this.attack = attack;
        this.defense = defense;
        }

    // Métodos de acceso (getters) para los atributos adicionales
    getAttack(): number {
        return this.attack;
    }

    getDefense(): number {
        return this.defense;
    }

    // Métodos de modificación (setters) para los atributos adicionales
    setAttack(attack: number): void {
        try {
            if (attack > 0) {
                this.attack = attack;
            } else {
                throw new Error("El ataque debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer el ataque:", error);
        }
    }

    setDefense(defense: number): void {
        try {
            if (defense > 0) {
                this.defense = defense;
            } else {
                throw new Error("La defensa debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer la defensa:", error);
        }
    }

    // Método para atacar a otro personaje
    attackEnemy(enemy: Character): void {
        try {
            const damage = Math.max(this.attack - enemy.getLevel(), 0);  // El daño depende del nivel del enemigo
            const newHealth = Math.max(enemy.getHealth() - damage, 1);  // Asegura que la salud no sea negativa
            enemy.setHealth(newHealth);
            console.log(`${this.getName()} atacó a ${enemy.getName()} causando ${damage} de daño.`);
        } catch (error) {
            console.error("Error al atacar al enemigo:", error);
        }
}
    // Método para defenderse de un ataque
    defendFromAttack(damage: number): void {
        try {
            const reducedDamage = Math.max(damage - this.defense, 0);  // La defensa reduce el daño
            this.setHealth(this.getHealth() - reducedDamage);
            console.log(`${this.getName()} se defendió del ataque, recibiendo ${reducedDamage} de daño.`);
        } catch (error) {
            console.error("Error al defenderse del ataque:", error);
        }
    }

    // Método para mostrar información del Warrior
    getWarriorInfo(): string {
        return `${this.getCharacterInfo()}, Ataque: ${this.attack}, Defensa: ${this.defense}`;
    }
}
