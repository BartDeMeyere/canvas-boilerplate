export class Renderer{

    constructor(canvas){

        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
    }

    draw(){
        
        this.ctx.clearRect(0,0,this.canvas.width , this.canvas.height)
        console.log(this.ctx)
        requestAnimationFrame( () => {this.draw()})
    }
}