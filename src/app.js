import { Renderer } from "./renderer.js"
import { Scene } from "./scene/scene.js"

export class App {

    constructor(canvas) {

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.dpr = window.devicePixelRatio || 1

        this.canvas.width = innerWidth * this.dpr 
        this.canvas.height = innerHeight * this.dpr

        this.canvas.style.width = innerWidth + "px"
        this.canvas.style.height = innerHeight + "px"

        this.ctx.scale(this.dpr , this.dpr)

        this.scene = new Scene(this.canvas)

        this.renderer = new Renderer(this.canvas, this.scene)
        this.renderer.draw()
    }
}