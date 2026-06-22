export class EventHandler {

    constructor(element) {

        this.element = element
        this.pointer = { x: 0, y: 0 }
        this.pointerDown = false
        this.init()
    }

    init() {

        this.element.addEventListener("pointerdown", (e) => {

            this.pointerDown = true
            let rect = this.element.getBoundingClientRect()
            this.pointer.x = e.clientX - rect.left
            this.pointer.y = e.clientY - rect.top
        })

        this.element.addEventListener("pointermove", (e) => {

            let rect = this.element.getBoundingClientRect()
            this.pointer.x = e.clientX - rect.left
            this.pointer.y = e.clientY - rect.top
        })

        this.element.addEventListener("pointerup", (e) => {

           this.pointerDown = false 
           
        })
    }
}