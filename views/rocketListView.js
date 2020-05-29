/**
 * @class RocketControllerView
 *
 * Creates list of rockets
 */
"use strict";
class RocketControllerView {
    constructor() {
        this.p = document.getElementById("root");
        this.showRocketList = document.getElementById("showRocketList");
        this.rocket1btn = document.getElementById("rocket1btn");
        this.rocket1img = document.getElementById("rocket1img");
        this.rocket2btn = document.getElementById("rocket2btn");
        this.rocket2img = document.getElementById("rocket2img");
        this.printbtn1 = document.getElementById("printbtn1");
        this.printbtn2 = document.getElementById("printbtn2");
        this.acceleratebtn1 = document.getElementById("acceleratebtn1");
        this.acceleratebtn2 = document.getElementById("acceleratebtn2");
        this.breakbtn1 = document.getElementById("breakbtn1");
        this.breakbtn2 = document.getElementById("breakbtn2");
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    showNewRocket(id) {
        if (id === "32WESSDS") {
            this.rocket1btn.classList.toggle("d-none");
            this.rocket1img.classList.toggle("d-none");
        }
        else if (id === "LDSFJA32") {
            this.rocket2btn.classList.toggle("d-none");
            this.rocket2img.classList.toggle("d-none");
        }
    }
    showRockets(rocketList) {
        this.p.innerHTML = "";
        for (let rocket of rocketList._getRocketList) {
            let thrustersMaxPower = rocket.thrustersMaxPower(rocket);
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocket.id} has ${rocket.numThrusters} thrusters (max power:${thrustersMaxPower.toString()}.).`;
            this.p.append(p);
        }
    }
    showSingleRocket(id, rocketList) {
        let singleRocketid = rocketList.findRocket(id).id;
        let singleRocketnum = rocketList.findRocket(id).numThrusters;
        let thrustersMaxPower = rocketList.findRocket(id).thrustersMaxPower(rocketList.findRocket(id));
        this.p.innerHTML = `Rocket ${singleRocketid} has ${singleRocketnum} thrusters (max power:${thrustersMaxPower.toString()}.).`;
    }
    showCurrentPower(id, rocketList) {
        let rocketId = rocketList.findRocket(id).id;
        let currentPower = rocketList.findRocket(id).currentPower;
        let maxPower = rocketList.findRocket(id).calculateMaxPower();
        let thrustersCurrentPower = rocketList.findRocket(id).thrustersCurrentPower(rocketList.findRocket(id));
        if (currentPower < maxPower) {
            this.p.innerHTML = `Rocket ${rocketId}'s current power: ${currentPower} (thrusters:${thrustersCurrentPower}).`;
        }
        else {
            this.p.innerHTML = `Rocket ${rocketId} has reached its max power of ${maxPower}.`;
            ;
        }
    }
}
