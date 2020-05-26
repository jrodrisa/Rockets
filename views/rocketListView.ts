/**
 * @class RocketControllerView
 *
 * Creates list of rockets 
 */
"use strict";

class RocketControllerView{
    
    elements: HTMLElement | null;

    constructor(){
        this.elements = this.getElement("root");
    }

    createElement(tag: string, className?: string): HTMLElement {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
    }
    
    getElement(selector: string): HTMLElement | null {
        return document.getElementById(selector);
    }
        
    showRockets(rocketList: RocketListModel):void{
        const p = this.createElement('p');
        p.textContent = `This is a list of all rockets:`;
            
        this.elements?.append(p);

        for (let rocket of rocketList._getRocketList){

            let thrustersMaxPower = rocket.thrustersMaxPower(rocket);

            const p = this.createElement('p');
            p.textContent = `Rocket ${rocket.id} has ${rocket.numThrusters} thrusters (max power:${thrustersMaxPower.toString()}.).`;

            this.elements?.append(p);

        }
    }

    showSingleRocket(id: string, rocketList: RocketListModel):void{
        let singleRocketid = rocketList.findRocket(id).id;
        let singleRocketnum = rocketList.findRocket(id).numThrusters;

        let thrustersMaxPower = rocketList.findRocket(id).thrustersMaxPower(rocketList.findRocket(id));


        const p1 = this.createElement('p');
        p1.textContent = `This is a single rocket:`;
        const p = this.createElement('p');
        p.textContent = `Rocket ${singleRocketid} has ${singleRocketnum} thrusters (max power:${thrustersMaxPower.toString()}.).`;
        
        this.elements?.append(p1, p);
    }

    showCurrentPower(id: string, rocketList: RocketListModel):void{
        let rocketId: string = rocketList.findRocket(id).id;
        let currentPower: number = rocketList.findRocket(id).currentPower;
        let maxPower: number = rocketList.findRocket(id).calculateMaxPower();
        let thrustersCurrentPower: number[] = rocketList.findRocket(id).thrustersCurrentPower(rocketList.findRocket(id));

        if (currentPower < maxPower) {
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocketId}'s current power: ${currentPower} (thrusters:${thrustersCurrentPower}).`;
            
            this.elements?.append(p);            
        } else{
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocketId} has reached its max power of ${maxPower}.`;
            
            this.elements?.append(p);
        }
    }
}



