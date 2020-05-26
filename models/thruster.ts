/**
 * @class Rocket
 *
 * Creates rocket model
 */

"use strict";

class Thruster {

    currentPower: number;
    maxPower: number;

    constructor(currentPower: number, maxPower: number) {
        this.currentPower = currentPower;
        this.maxPower = maxPower;
    }
}