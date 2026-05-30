export class Scene {

    constructor(canvas) {

        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d")
        this.pointer = { x: 0, y: 0 }
        this.initEvents()
    }

    initEvents() {

        this.canvas.addEventListener("pointerdown", (e) => {

            //get pointer position
            this.pointer.x = e.clientX 
            this.pointer.y = e.clientY

        })

        this.canvas.addEventListener("pointermove", (e) => {

            //update pointer position
            this.pointer.x = e.clientX 
            this.pointer.y = e.clientY

            console.log(this.pointer.x , this.pointer.y)

        })

        this.canvas.addEventListener("pointerup", (e) => {

        })
    }

    draw(ctx) {

      
    }
}