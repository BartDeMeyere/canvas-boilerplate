import { EventHandler } from "./eventHandler.js";

export class GamePlay{

    constructor(canvas){

        this.canvas = canvas
        this.event = new EventHandler(this.canvas)
        this.prevPointerDown = false
    }

    runGameLoop(){

        if(this.event.pointerDown && !this.prevPointerDown){

            console.log(this.event.pointer.x , this.event.pointer.y)
        }

        this.prevPointerDown = this.event.pointerDown
    }

    draw(ctx){

        
    }
}