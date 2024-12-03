export class Character {
    private name: string;
    private level: number;
    private health: number;
    private experience: number;
    private inventory: string[];

    constructor(name: string, level: number, health: number, experience: number, inventory: string[]) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience;
        this.inventory = inventory;
    }

    // Métodos para obtener los valores de los atributos
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

    // Métodos para modificar los valores de los atributos
    setName(name: string): void {
        try {
            if (name.length > 0) {
                this.name = name;
            } else {
                throw new Error("El nombre no puede estar vacío.");
            }
        } catch (error) {
            console.error("Error al establecer el nombre:", error);
        }
    }

    setLevel(level: number): void {
        try {
            if (level > 0) {
                this.level = level;
            } else {
                throw new Error("El nivel debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer el nivel:", error);
        }
    }

    setHealth(health: number): void {
        try {
            if (health > 0) {
                this.health = health;
            } else {
                throw new Error("La salud debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer la salud:", error);
        }
    }

    setExperience(health: number): void {
        try {
            if (health > 0) {
                this.health = health;
            } else {
                throw new Error("La salud debe ser mayor que cero.");
            }
        } catch (error) {
            console.error("Error al establecer la salud:", error);
        }
    }

    addExperience(amount: number): void {
        try {
            if (amount > 0) {
                this.experience += amount;
            } else {
                throw new Error("La cantidad de experiencia debe ser positiva.");
            }
        } catch (error) {
            console.error("Error al agregar experiencia:", error);
        }
    }

    addItemToInventory(item: string): void {
        try {
            if (item && item.length > 0) {
                this.inventory.push(item);
            } else {
                throw new Error("El artículo no puede estar vacío.");
            }
        } catch (error) {
            console.error("Error al agregar artículo al inventario:", error);
        }
    }

    removeItemFromInventory(item: string): void {
        try {
            const index = this.inventory.indexOf(item);
            if (index !== -1) {
                this.inventory.splice(index, 1);
            } else {
                throw new Error(`El artículo '${item}' no está en el inventario.`);
            }
        } catch (error) {
            console.error("Error al eliminar artículo del inventario:", error);
        }
    }

    // Método para mostrar la información del personaje
    getCharacterInfo(): string {
        return `Nombre: ${this.name}, Nivel: ${this.level}, Salud: ${this.health}, Experiencia: ${this.experience}, Inventario: ${this.inventory}`;
    }
}
