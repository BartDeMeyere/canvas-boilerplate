export class EventHandler {

    constructor(element) {

        this.element = element
        this.pointer = { x: 0, y: 0 }
        this.pointerDown = false
        this.init()
    }

    init() {

        this.element.addEventListener("pointerdown", (e) => {

            //get pointer position
            this.pointer.x = e.clientX
            this.pointer.y = e.clientY
            this.pointerDown = true

        })

        this.element.addEventListener("pointermove", (e) => {

            //update pointer position
            this.pointer.x = e.clientX
            this.pointer.y = e.clientY

        })

        this.element.addEventListener("pointerup", (e) => {

            this.pointerDown = false
        })
    }
}