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
        this.id1 = "32WESSDS";
        this.id2 = "LDSFJA32";
        this.rocket1 = this.createRocket("default");
        this.rocket2 = this.createRocket("default");
        this.handleShowRocketList();
        this.handleNewRockets();
        this.handleShowRocket();
        this.handleAccelerateRocket();
        this.handleBreakRocket();
    }
    createRocket(id) {
        let rocket = new Rocket(id);
        if (id === this.id1) {
            rocket.addThrusters(this.id1);
        }
        else if (id === this.id2) {
            rocket.addThrusters(this.id2);
        }
        if (id !== "default") {
            this.rocketListModel.addRocket(rocket);
            console.log(`Rocket ${id} has been created`);
        }
        return rocket;
    }
    handleNewRockets() {
        this.rocketListView.rocket1btn.addEventListener("click", event => {
            this.rocket1 = rocketListController.createRocket(this.id1);
            rocketListController.rocketListView.showNewRocket(this.id1);
        });
        this.rocketListView.rocket2btn.addEventListener("click", event => {
            this.rocket2 = rocketListController.createRocket(this.id2);
            rocketListController.rocketListView.showNewRocket(this.id2);
        });
    }
    handleShowRocket() {
        this.rocketListView.printbtn1.addEventListener("click", event => {
            this.rocketListView.showSingleRocket(this.id1, this.rocketListModel);
        });
        this.rocketListView.printbtn2.addEventListener("click", event => {
            this.rocketListView.showSingleRocket(this.id2, this.rocketListModel);
        });
    }
    handleShowRocketList() {
        this.rocketListView.showRocketList.addEventListener("click", event => {
            this.rocketListView.showRockets(this.rocketListModel);
        });
    }
    handleShowCurrentPower(id) {
        this.rocketListView.showCurrentPower(id, this.rocketListModel);
    }
    handleAccelerateRocket() {
        this.rocketListView.acceleratebtn1.addEventListener("click", event => {
            this.rocketListModel.findRocket(this.id1).accelerateRocket();
            this.handleShowCurrentPower(this.id1);
        });
        this.rocketListView.acceleratebtn2.addEventListener("click", event => {
            this.rocketListModel.findRocket(this.id2).accelerateRocket();
            this.handleShowCurrentPower(this.id2);
        });
    }
    handleBreakRocket() {
        this.rocketListView.breakbtn1.addEventListener("click", event => {
            this.rocketListModel.findRocket(this.id1).breakRocket();
            this.handleShowCurrentPower(this.id1);
        });
        this.rocketListView.breakbtn2.addEventListener("click", event => {
            this.rocketListModel.findRocket(this.id2).breakRocket();
            this.handleShowCurrentPower(this.id2);
        });
    }
}
let rocketListController = new RocketListController(new RocketListModel(), new RocketControllerView());
