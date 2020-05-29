/**
 * @class RocketControllerView
 *
 * Creates list of rockets 
 */
"use strict";

class RocketControllerView{
    
    p: HTMLElement;
    showRocketList: HTMLElement
    rocket1btn: HTMLElement;
    rocket1img: HTMLElement;
    rocket2btn: HTMLElement;
    rocket2img: HTMLElement;
    printbtn1: HTMLElement;
    printbtn2: HTMLElement;
    acceleratebtn1: HTMLElement;
    acceleratebtn2: HTMLElement;
    breakbtn1: HTMLElement;
    breakbtn2: HTMLElement;
    
    constructor(){
        this.p = <HTMLElement> document.getElementById("root");
        this.showRocketList = <HTMLElement> document.getElementById("showRocketList");
        this.rocket1btn = <HTMLElement> document.getElementById("rocket1btn");
        this.rocket1img = <HTMLElement> document.getElementById("rocket1img");
        this.rocket2btn = <HTMLElement> document.getElementById("rocket2btn");
        this.rocket2img = <HTMLElement> document.getElementById("rocket2img");
        this.printbtn1 = <HTMLElement> document.getElementById("printbtn1");
        this.printbtn2 = <HTMLElement> document.getElementById("printbtn2");
        this.acceleratebtn1 = <HTMLElement> document.getElementById("acceleratebtn1");
        this.acceleratebtn2 = <HTMLElement> document.getElementById("acceleratebtn2");
        this.breakbtn1 = <HTMLElement> document.getElementById("breakbtn1");
        this.breakbtn2 = <HTMLElement> document.getElementById("breakbtn2");
    }

    createElement(tag: string, className?: string): HTMLElement {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }

    showNewRocket(id:string){
        if (id === "32WESSDS"){
            this.rocket1btn.classList.toggle("d-none");
            this.rocket1img.classList.toggle("d-none");
        } else if (id === "LDSFJA32") {
            this.rocket2btn.classList.toggle("d-none");
            this.rocket2img.classList.toggle("d-none");
        }
    }
   
    showRockets(rocketList: RocketListModel):void{
        this.p.innerHTML = "";
        for (let rocket of rocketList._getRocketList){

            let thrustersMaxPower = rocket.thrustersMaxPower(rocket);

            const p = this.createElement('p');
            p.textContent = `Rocket ${rocket.id} has ${rocket.numThrusters} thrusters (max power:${thrustersMaxPower.toString()}.).`;

            this.p.append(p);

        }
    }

    showSingleRocket(id: string, rocketList: RocketListModel):void{
        let singleRocketid = rocketList.findRocket(id).id;
        let singleRocketnum = rocketList.findRocket(id).numThrusters;

        let thrustersMaxPower = rocketList.findRocket(id).thrustersMaxPower(rocketList.findRocket(id));
        this.p.innerHTML = `Rocket ${singleRocketid} has ${singleRocketnum} thrusters (max power:${thrustersMaxPower.toString()}.).`;
    }

    showCurrentPower(id: string, rocketList: RocketListModel):void{
        let rocketId: string = rocketList.findRocket(id).id;
        let currentPower: number = rocketList.findRocket(id).currentPower;
        let maxPower: number = rocketList.findRocket(id).calculateMaxPower();
        let thrustersCurrentPower: number[] = rocketList.findRocket(id).thrustersCurrentPower(rocketList.findRocket(id));

        if (currentPower < maxPower) {
            this.p.innerHTML = `Rocket ${rocketId}'s current power: ${currentPower} (thrusters:${thrustersCurrentPower}).`;           
        } else{
            this.p.innerHTML = `Rocket ${rocketId} has reached its max power of ${maxPower}.`;;
        }
    }

}



