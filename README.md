# Canvas Boilerplate

Een moderne starterskit voor HTML5 Canvas-projecten met een modulaire JavaScript-architectuur. Deze boilerplate biedt een solide basis om meerdere JavaScript-modules eenvoudig met elkaar te laten samenwerken, zodat je je kunt richten op het bouwen van interactieve applicaties, games of visualisaties.

## Features

* 📦 Modulaire JavaScript-structuur (ES Modules)
* 🎨 Voorgeconfigureerde HTML5 Canvas
* 🔄 Centrale update- en renderloop
* 🧩 Eenvoudig uitbreidbaar met nieuwe modules
* ⚡ Schone projectstructuur
* 🚀 Ideaal als basis voor games, animaties en interactieve experimenten

---

## Projectstructuur

```text
project/
│
├── index.html
├── main.js
├── src/
   ├── app.js             # Applicatie startpunt
   ├── renderer.js        # Canvas rendering module
   └── scene/
       ├── eventHandler.js # Mouse and touch input module
       ├── scene.js        # Hier komen alle modules om met elkaar te werken



## Hoe werkt het?

De boilerplate maakt gebruik van **ES Modules**, waardoor iedere functionaliteit zijn eigen bestand krijgt.

Elke module heeft één duidelijke verantwoordelijkheid:

* Canvas initialiseren
* Muis interactie beheren
* Animaties uitvoeren
* Rendering verzorgen
* Logica afhandelen

Modules communiceren met elkaar via imports en exports. Hierdoor blijft de code overzichtelijk, onderhoudbaar en eenvoudig uit te breiden.

## Voorbeeld

import { EventHandler } from "./eventHandler.js"

export class Scene {

    constructor(canvas) {

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.dpr = window.devicePixelRatio || 1

        this.canvas.width = innerWidth * this.dpr
        this.canvas.height = innerHeight * this.dpr
        this.canvas.style.width = innerWidth + "px"
        this.canvas.style.height = innerHeight + "px"
        this.ctx.scale(this.dpr, this.dpr)
        this.event = new EventHandler(this.canvas)

    }

    runLoop() {

        if (this.event.pointer.isPressed) {

            console.log(this.event.pointer.x , this.event.pointer.y)
        }

    }


    draw(ctx) {

       
    }
}
---

## Een nieuwe module toevoegen

1. Maak een nieuw bestand aan in `src/scene/`.
2. Exporteer de class of functie.
3. Importeer deze in `scene.js` of een andere module.

Door deze structuur blijven modules los van elkaar en kunnen ze eenvoudig worden hergebruikt.

## Waarom deze boilerplate?

Naarmate een Canvas-project groeit, kan alle logica in één bestand snel onoverzichtelijk worden. Deze boilerplate lost dat op door functionaliteit op te splitsen in kleine, zelfstandige modules.

Voordelen:

* betere leesbaarheid
* eenvoudiger onderhoud
* herbruikbare componenten
* makkelijker samenwerken in teams
* schaalbaar voor grotere projecten

---

## Geschikt voor

* HTML5 Canvas-projecten
* Games
* Simulaties
* Animaties
* Data visualisaties
* Interactieve websites
* Creative coding

---

## Vereisten

* Moderne browser met ondersteuning voor ES Modules
* Geen externe libraries vereist

---

## Aan de slag

Clone of download de repository.
Open vervolgens `index.html` via een lokale webserver (bijvoorbeeld met VS Code Live Server) om ES Modules correct te laden.

---

## Uitbreidingen

Deze boilerplate is bewust minimalistisch gehouden en vormt een solide basis voor uitbreiding met bijvoorbeeld:

* Asset Loader
* Audio Manager
* Scene Manager
* Physics
* Particle System
* Camera
* UI Components
* Collision Detection
* Entity Component System (ECS)

---

## Licentie

Vrij te gebruiken en aan te passen voor persoonlijke en commerciële projecten.
