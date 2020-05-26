/**
 * @class RocketControllerView
 *
 * Creates list of rockets
 */
"use strict";
class RocketControllerView {
    constructor() {
        this.elements = this.getElement("root");
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    getElement(selector) {
        return document.getElementById(selector);
    }
    showRockets(rocketList) {
        var _a, _b;
        const p = this.createElement('p');
        p.textContent = `This is a list of all rockets:`;
        (_a = this.elements) === null || _a === void 0 ? void 0 : _a.append(p);
        for (let rocket of rocketList._getRocketList) {
            let thrustersMaxPower = rocket.thrustersMaxPower(rocket);
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocket.id} has ${rocket.numThrusters} thrusters (max power:${thrustersMaxPower.toString()}.).`;
            (_b = this.elements) === null || _b === void 0 ? void 0 : _b.append(p);
        }
    }
    showSingleRocket(id, rocketList) {
        var _a;
        let singleRocketid = rocketList.findRocket(id).id;
        let singleRocketnum = rocketList.findRocket(id).numThrusters;
        let thrustersMaxPower = rocketList.findRocket(id).thrustersMaxPower(rocketList.findRocket(id));
        const p1 = this.createElement('p');
        p1.textContent = `This is a single rocket:`;
        const p = this.createElement('p');
        p.textContent = `Rocket ${singleRocketid} has ${singleRocketnum} thrusters (max power:${thrustersMaxPower.toString()}.).`;
        (_a = this.elements) === null || _a === void 0 ? void 0 : _a.append(p1, p);
    }
    showCurrentPower(id, rocketList) {
        var _a, _b;
        let rocketId = rocketList.findRocket(id).id;
        let currentPower = rocketList.findRocket(id).currentPower;
        let maxPower = rocketList.findRocket(id).calculateMaxPower();
        let thrustersCurrentPower = rocketList.findRocket(id).thrustersCurrentPower(rocketList.findRocket(id));
        if (currentPower < maxPower) {
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocketId}'s current power: ${currentPower} (thrusters:${thrustersCurrentPower}).`;
            (_a = this.elements) === null || _a === void 0 ? void 0 : _a.append(p);
        }
        else {
            const p = this.createElement('p');
            p.textContent = `Rocket ${rocketId} has reached it's max power of ${maxPower}.`;
            (_b = this.elements) === null || _b === void 0 ? void 0 : _b.append(p);
        }
    }
}
