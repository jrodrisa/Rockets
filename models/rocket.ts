/**
 * @class Rocket
 *
 * Creates rocket model
 */

"use strict";

class Rocket {

    id: string;
    thrusters: Thruster[];
    numThrusters: number;
    initialPower: number;
    currentPower: number;
    maxPower: number;

    constructor(id: string, numThrusters: number, thrusters: Thruster[]) {
        this.id = id;
        this.numThrusters = numThrusters;
        this.thrusters = thrusters;
        this.initialPower = 0;
        this.currentPower = this.calculateCurrentPower();
        this.maxPower = this.calculateMaxPower();
    }

    thrustersMaxPower(rocket: Rocket): number[]{
        let thrustersMaxPower: number[] = [];

        for (let i = 0; i < (rocket.numThrusters); i++) {               
            thrustersMaxPower.push(rocket.thrusters[i].maxPower);
        }
        
        return thrustersMaxPower;
    }


    thrustersCurrentPower(rocket: Rocket): number[]{
        let thrustersCurrentPower: number[] = [];

        for (let i = 0; i < (rocket.numThrusters); i++) {               
            thrustersCurrentPower.push(rocket.thrusters[i].currentPower);
        }
    
        return thrustersCurrentPower;
    }

    calculateCurrentPower(): number{
        if (isNaN(this.currentPower)) {
            this.currentPower = this.initialPower;
        }

        this.currentPower = 0;

        for (let i = 0; i < (this.numThrusters); i++) { 
             this.currentPower += this.thrusters[i].currentPower;
        }
        console.log(this.currentPower);
        return this.currentPower;
    }

    calculateMaxPower(): number{
        if (isNaN(this.maxPower)){
            this.maxPower = 0;
            for (let i = 0; i < (this.numThrusters); i++) { 
                this.maxPower += this.thrusters[i].maxPower;
           }
           console.log(this.maxPower);
        }
        return this.maxPower;
    }

    accelerateRocket():void{
        for (let thruster of this.thrusters){
            if (thruster.currentPower < thruster.maxPower) {
                thruster.currentPower += 10;
            }
        }
        this.currentPower = this.calculateCurrentPower();
    }

    breakRocket():void{
        for (let thruster of this.thrusters){
            if (thruster.currentPower > this.initialPower) {
                thruster.currentPower -= 10;
            }
        }
        this.currentPower = this.calculateCurrentPower();
    }
}

