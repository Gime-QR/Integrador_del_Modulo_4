
# ADA API PARA UN VIDEOJUEGOS

# Descripción

La **ADA API PARA VIDEOJUEGOS** permite sumergite en un mundo donde puden crear personajes, adquirir habilidades, y obtener recompensa o beneficios a través de las misiones llevadas a cabo en diferentes niveles. Los personajes cuentan con atributos adicionales de ataque y defensa, como también poder mágico y maná. En cuanto a las misiones, detallan la dificultad y el premio adquirido una vez complentada la misión.


## Requisitos previos
Antes de configurar y ejecutar el proyecto, asegúrate de tener instalados los siguientes componentes en tu sistema:

- **Node.js (v14.0 o superior).
- **npm (que viene instalado junto con Node.js).
- **Typescript y ts-node como dependencias de desarrollo.

## Instalación
Sigue estos pasos para configurar y ejecutar el proyecto:

### Descarga el proyecto.

### Instala las dependencias:
Ejecuta el siguiente comando para instalar todas las dependencias listadas en el archivo package.json:
- **npm init
- **npm install typescript ts-node 
- **npx tsc --init 


### Estructura del Proyecto
Sigue las siguientes covenciones:

**src/**: Carpeta de origen del proyecto.

**controllers/**: 

- **gameController.ts/** : Archivo 

**models/**: 

- **Characters.ts/**: Archivo donde se crea la estructura de los personajes y métodos.
- **Mage.ts/**: Gestiona las operaciones relacionadas con la Magia (como se extiende a los personajes, el poder y la cantidad de mana).
- **Misiion.ts/**: Gestiona las operaciones en cuánto a las misiones (descripción, dificultad, entrega de recompensa).
- **Warrior.ts/**: Gestiona las operaciones relacionadas en cuánto a la defensa, ataques, resistencia durante en videojuego.

**index.ts/**: Archivo que gestiona las creaciones de personajes y misiones, asignacion de misiones, actualización de personajes. Además de las actualizaciones luego de cada misión.


## Funciones y posibles respuestas del videojuegos

### Personajes (Characters)
- Creacion del personaje
- Obtencion de las misiones asignadas para cada persoanje
- Actualización de cada personaje, si sube o baja de niveles ademas del nidel de salud
- Eliminación de personaje


### Misiones 
- Creación de misiones
- Asignación de misiones a cada personaje
- Visualización de misiones después de completarlas
- Visualización de misiones luego de la actualización de personajes
