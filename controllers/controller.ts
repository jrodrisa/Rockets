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
        this.rocketListModel = rocketListModel; //cridar la funció createRocketList 
        this.rocketListView = rocketListView;
    }

    createRocket(){
        //TODO
    }

    createRocketList(){
        //Cridar la funció createRocket dos cops (un per cada coet) i afegir-ho en un nou RocketListModel 
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

