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

        if (this.event.pointerDown) {

            console.log(this.event.pointer.x , this.event.pointer.y)
        }

    }


    draw(ctx) {

       
    }
}