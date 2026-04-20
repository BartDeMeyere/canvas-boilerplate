import { Renderer } from "./renderer.js"

export class App{

    constructor(canvas){

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")

        this.renderer = new Renderer(this.canvas)
        this.renderer.draw()
    }
}