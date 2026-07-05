export class DraggableElement{

    constructor(element) {

        this.element = element

        this.pointer = {
            
            x: 0,
            y: 0,
            isPressed: false,
            isReleased: false,
            justPressed: false,
            offsetX: 0,
            offsetY: 0
        }

        this.dragging = false

        this.init()
    }

    init() {

        this.element.style.position = "absolute"

        this.element.addEventListener("pointerdown", (e) => {

            this.dragging = true
            this.pointer.isPressed = true
            this.pointer.isReleased = false
            this.pointer.justPressed = true
            let rect = this.element.getBoundingClientRect()
            this.pointer.x = e.clientX - rect.left
            this.pointer.y = e.clientY - rect.top

            //offset tussen klik en element positie
            this.pointer.offsetX = e.clientX - rect.left
            this.pointer.offsetY = e.clientY - rect.top

        })

        window.addEventListener("pointermove", (e) => {

            if(!this.dragging)return

            let rect = this.element.getBoundingClientRect()
            
            this.pointer.x = e.clientX - rect.left
            this.pointer.y = e.clientY - rect.top

            const x = e.clientX - this.pointer.offsetX
            const y = e.clientY - this.pointer.offsetY

            this.element.style.left = x + "px"
            this.element.style.top = y + "px"
        })

        window.addEventListener("pointerup", (e) => {

            this.dragging = false
            this.element.style.userSelect = "none"
            this.pointer.isPressed = false
            this.pointer.isReleased = true

        })
    }
}