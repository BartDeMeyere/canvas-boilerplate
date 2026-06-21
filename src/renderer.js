export class Renderer{

    constructor(canvas , game){

        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.game = game
    }

    draw(){
        
        this.ctx.clearRect(0,0,this.canvas.width , this.canvas.height)
        this.game.gamePlay.runGameLoop()
        this.game.gamePlay.draw(this.ctx)
        requestAnimationFrame( () => {this.draw()})
    }
}