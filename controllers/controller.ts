/**
 * @class RocketListController
 *
 * Links the user input and the view output.
 *
 * @param RocketListModel
 * @param RocketListView
 */
"use strict";

 class RocketListController{

    rocketListModel: RocketListModel; 
    rocketListView: RocketControllerView;


    constructor(rocketListModel: RocketListModel, rocketListView: RocketControllerView,){
        this.rocketListModel = rocketListModel;
        this.rocketListView = rocketListView;
    }

    createRocket(id: string):Rocket{
        let rocket: Rocket = new Rocket(id);
        if (id === "32WESSDS"){
            rocket.addThrusters("32WESSDS");
        } else if (id === "LDSFJA32") {
            rocket.addThrusters("LDSFJA32");
        }
        this.rocketListModel.addRocket(rocket);
        return rocket;
    }
        
    handleShowRocket(id: string): void{
        this.rocketListView.showSingleRocket(id, this.rocketListModel);
    }

    handleShowRocketList(): void{
        this.rocketListView.showRockets(this.rocketListModel);
    }

    handleShowCurrentPower(id: string){
        this.rocketListView.showCurrentPower(id, this.rocketListModel);
    }

    handleAccelerateRocket(id:string){
        this.rocketListModel.findRocket(id).accelerateRocket();
    }

    handleBreakRocket(id: string){
        this.rocketListModel.findRocket(id).breakRocket();
    }
}
