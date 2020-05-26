/**
 * @class RocketListModel
 *
 * Creates list of rockets 
 */

"use strict";

class RocketListModel{
    rockets: Rocket[];

    constructor(rockets: Rocket[]) {
        this.rockets = rockets;
    }

    get _getRocketList(){
        return this.rockets;
    }

    findRocket(id: string){
        return this.rockets.filter(e => e.id == id)[0];
    }
}