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

    constructor(id: string) {
        this.id = id;
        this.thrusters = [];
        this.numThrusters = this.thrusters.length;
        this.initialPower = 0;
        this.currentPower = this.calculateCurrentPower();
        this.maxPower = this.calculateMaxPower();
    }

    addThrusters(id: string): Thruster[]{
        if (id === "32WESSDS"){
            this.thrusters.push(
                new Thruster(0, 10), 
                new Thruster(0, 30), 
                new Thruster(0, 80) 
            );
            
        } else if (id === "LDSFJA32") {
            this.thrusters.push( 
                new Thruster(0, 30), 
                new Thruster(0, 40),
                new Thruster(0, 50), 
                new Thruster(0, 50),
                new Thruster(0, 30),
                new Thruster(0, 10) 
            );
        }
        this.numThrusters = this.thrusters.length;
        this.maxPower = this.calculateMaxPower();
        return this.thrusters;
    }

    thrustersMaxPower(rocket: Rocket):number[]{
        let thrustersMaxPower: number[] = [];

        for (let i = 0; i < (rocket.numThrusters); i++) {               
            thrustersMaxPower.push(rocket.thrusters[i].maxPower);
        }
        
        return thrustersMaxPower;
    }


    thrustersCurrentPower(rocket: Rocket):number[]{
        let thrustersCurrentPower: number[] = [];

        for (let i = 0; i < (rocket.numThrusters); i++) {               
            thrustersCurrentPower.push(rocket.thrusters[i].currentPower);
        }
    
        return thrustersCurrentPower;
    }

    calculateCurrentPower():number{
        if (isNaN(this.currentPower)) {
            this.currentPower = this.initialPower;
        }

        this.currentPower = this.initialPower;

        for (let i = 0; i < (this.numThrusters); i++) { 
             this.currentPower += this.thrusters[i].currentPower;
        }
        return this.currentPower;
    }

    calculateMaxPower():number{
        this.maxPower = 0;
        for (let i = 0; i < (this.numThrusters); i++) { 
            this.maxPower += this.thrusters[i].maxPower;
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

