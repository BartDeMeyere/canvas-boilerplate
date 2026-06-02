import { EventHandler } from "./eventHandler.js"

export class Scene {

    constructor(canvas) {

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.event = new EventHandler(this.canvas)
    }

    update(){

    
    }

    draw(ctx) {

      
    }
}