/**
 * @class RocketListModel
 *
 * Creates list of rockets 
 */

"use strict";

class RocketListModel{
    rockets: Rocket[];

    constructor() {
        this.rockets = [];
    }

    get _getRocketList(){
        return this.rockets;
    }

    findRocket(id: string):Rocket{
        return this.rockets.filter(e => e.id == id)[0];
    }

    addRocket(rocket: Rocket):void{
        this.rockets.push(rocket);
    }
} 