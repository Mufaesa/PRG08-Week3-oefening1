/// <reference path="wheel.ts"/>

class Car {

    public behaviour: Behaviour;

    public speed: number;
    public div: HTMLElement;
    public x: number;
    public y: number;
    public wheel1: Wheel;
    public wheel2: Wheel;
    private state: number;

    constructor(parent: HTMLElement) {
        this.div = document.createElement("car");
        parent.appendChild(this.div);

        this.state = 1;
        this.behaviour = new Driving(this);

        this.speed = 2;
        this.x = 0;
        this.y = 220;

        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    }


    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.key);
        this.behaviour.onkeydown();
    }

    public draw(): void {
        this.behaviour.draw();

        /*
        if (this.state == 1) {
            // drive

        } else if (this.state == 2) {
            // jump

        } else if (this.state == 3) {
            // crash
            }
            */

        


        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    } 


}