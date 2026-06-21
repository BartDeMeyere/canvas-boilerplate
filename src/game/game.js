import { GamePlay } from "./gameplay.js"

export class Game {

    constructor(canvas) {

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.gamePlay = new GamePlay(canvas)
    }

}