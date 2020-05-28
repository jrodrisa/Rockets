/**
 * @class RocketListController
 *
 * Links the user input and the view output.
 *
 * @param RocketListModel
 * @param RocketListView
 */
"use strict";
class RocketListController {
    constructor(rocketListModel, rocketListView) {
        this.rocketListModel = rocketListModel;
        this.rocketListView = rocketListView;
    }
    createRocket(id) {
        let rocket = new Rocket(id);
        if (id === "32WESSDS") {
            rocket.addThrusters("32WESSDS");
        }
        else if (id === "LDSFJA32") {
            rocket.addThrusters("LDSFJA32");
        }
        this.rocketListModel.addRocket(rocket);
        return rocket;
    }
    handleShowRocket(id) {
        this.rocketListView.showSingleRocket(id, this.rocketListModel);
    }
    handleShowRocketList() {
        this.rocketListView.showRockets(this.rocketListModel);
    }
    handleShowCurrentPower(id) {
        this.rocketListView.showCurrentPower(id, this.rocketListModel);
    }
    handleAccelerateRocket(id) {
        this.rocketListModel.findRocket(id).accelerateRocket();
    }
    handleBreakRocket(id) {
        this.rocketListModel.findRocket(id).breakRocket();
    }
}
