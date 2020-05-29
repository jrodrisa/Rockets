/**
 * @class RocketListModel
 *
 * Creates list of rockets
 */
"use strict";
class RocketListModel {
    constructor() {
        this.rockets = [];
    }
    get _getRocketList() {
        return this.rockets;
    }
    findRocket(id) {
        return this.rockets.filter(e => e.id == id)[0];
    }
    addRocket(rocket) {
        this.rockets.push(rocket);
    }
}
