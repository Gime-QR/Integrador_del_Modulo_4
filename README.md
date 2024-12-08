
# ADA API PARA UN VIDEOJUEGOS

# Descripción

**ADA API PARA VIDEOJUEGOS** permite sumergite en un mundo donde puden crear personajes, adquirir habilidades, y obtener recompensa o beneficios a través de las misiones llevadas a cabo en diferentes niveles. Los personajes cuentan con atributos adicionales de ataque y defensa, como también poder mágico y maná. En cuanto a las misiones, detallan la dificultad y el premio adquirido una vez complentada la misión.
 

**Objetivos del Proyecto**
- Permite la creación de personajes, con sus atributos.
- Crea las Misiones con sus recompensas por pasar cada nivel.
- Realiza estadisticas y probabilidades en cada asignación de misiones.
- Comparte el daño o la experiencia adquirida por el personaje. 



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

## Ejecutación del Juego 
Ejecuta el comando : **npx ts-node index.ts para que desplegue el Menú Principal

**Menú Principal**
En el menú principal incluye las tareas más importantes del juego. En las opciones desplegadas se encuentran desde la creación de personajes y asignación de misiones; también la interación entre personajes,en donde pueden lanzar de hechizos o atacar al enemigo además de los eventos aleatorios que designa si fue positivo o negativo. 


### Diseño del Proyecto
Sigue las siguientes covenciones:

**src/**: Carpeta de origen del proyecto.

**controllers/**:Carpeta donde se gestiona la lógica de las principales clases. 

- **gameController.ts/** : Archivo que gestiona la creación y eliminación de personaje, lista los persoanjes existentes y actualiza los personajes. Además gestiona la asignación de misión y completar la misión y el evento aleatorio.
- **gameLogic.ts/**: Gestiona las lógicas de las asiganción de las misiones: múltiples misiones, misiones usando promesas y misiones usando callbacks.

**models/**: Carpeta que gestiona la estructuras de las clases y las subclases.

- **Characters.ts/**: Archivo donde se crea la estructura de los personajes y métodos.
- **Mage.ts/**: Gestiona las operaciones relacionadas con la Magia (como se extiende a los personajes, el poder y la cantidad de mana).
- **Misiion.ts/**: Gestiona las operaciones en cuánto a las misiones (descripción, dificultad, entrega de recompensa).
- **Warrior.ts/**: Gestiona las operaciones relacionadas en cuánto a la defensa, ataques, resistencia durante en videojuego.

**gameHelpers.ts/**: Archivo que contiene funciones adicionales como las probabilidades de éxito en una misión, calcular la experiencia ganada luego de una misión; calcular la vida o daño luego de cada misión que gane o pierda un personaje. Además de calcular la probabilidad de recompensa de una evento aleatorio. 

**index.ts/**: Archivo principal que gestiona el menú principal del juego. Ejecuta las creaciones de personajes y misiones, asignacion de misiones, actualización de personajes. Además de las interacciones en cada misión, usa las probabilidades de éxito o de fallar y lo que gana o pierde. 








## Funciones y posibles respuestas del videojuegos

**MANEJO API VIDEJUEGOS** 
- Inicializa con un npx ts-node index.ts.
Se de

