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
        this.rocketListModel = rocketListModel; //cridar la funció createRocketList 
        this.rocketListView = rocketListView;
    }
    createRocket() {
        //TODO
    }
    createRocketList() {
        //Cridar la funció createRocket dos cops (un per cada coet) i afegir-ho en un nou RocketListModel 
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
