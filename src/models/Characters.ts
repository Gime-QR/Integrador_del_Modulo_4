export class Character {
    protected name: string;
    protected level: number;
    protected health: number;
    protected experience: number;
    protected inventory: string[];

// Constructor para inicializar el personaje con valores por defecto
    constructor(name: string, level: number = 1, health: number = 100, experience: number = 0, inventory: string[] = []) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.experience = experience;
    this.inventory = inventory;
    }

// Métodos getter y setter para el nombre
    getName(): string {
    return this.name;
    }

    setName(name: string): void {
    this.name = name;
    }

// Métodos getter y setter para el nivel
    getLevel(): number {
    return this.level;
    }

    setLevel(level: number): void {
    if (level > 0) {
        this.level = level;
    } else {
        console.error("El nivel debe ser mayor que 0.");
    }
    }

// Métodos getter y setter para la salud
    getHealth(): number {
    return this.health;
    }

    setHealth(health: number): void {
    if (health >= 0) {
        this.health = health;
    } else {
        console.error("La salud no puede ser negativa.");
    }
    }

// Métodos getter y setter para la experiencia
    getExperience(): number { 
    return this.experience;
    }

    setExperience(experience: number): void {
    if (experience >= 0) {
        this.experience = experience;
    } else {
        console.error("La experiencia no puede ser negativa.");
    }
    }

// Métodos getter y setter para el inventario
    getInventory(): string[] {
    return this.inventory;
    }

    setInventory(inventory: string[]): void {
    this.inventory = inventory;
    }

// Método para aumentar el nivel
    levelUp(): void {
    this.level += 1;
    console.log(`${this.name} ha subido de nivel! Ahora está en el nivel ${this.level}.`);
    }

// Método para reducir la salud (cuando recibe daño)
    takeDamage(amount: number): void {
    this.health -= amount;
      if (this.health < 0) this.health = 0; // Evitar que la salud sea negativa
    console.log(`${this.name} ha recibido ${amount} de daño. Salud restante: ${this.health}`);
    }

// Método para ganar experiencia
    gainExperience(amount: number): void {
    this.experience += amount;
    console.log(`${this.name} ha ganado ${amount} de experiencia. Experiencia total: ${this.experience}`);
    if (this.experience >= 100) {
        this.levelUp();
        this.experience -= 100;
    }
    }

// Método para agregar un ítem al inventario
    addToInventory(item: string): void {
    this.inventory.push(item);
    console.log(`${item} ha sido añadido al inventario de ${this.name}.`);
    }

// Mostrar el estado actual del personaje
    showStatus(): void {
    console.log(`
        Nombre: ${this.name}
        Nivel: ${this.level}
        Salud: ${this.health}
        Experiencia: ${this.experience}
        Inventario: ${this.inventory.join(', ') || 'Vacío'}
    `);
    }
}
