// crees dades inicials (rocket i controlador)

let thrusters1: Thruster[] = [
    new Thruster(0, 10), 
    new Thruster(0, 30), 
    new Thruster(0, 80)
]

let rocket1: Rocket = new Rocket("32WESSDS", 3, thrusters1);


let thrusters2: Thruster[] = [
    new Thruster(0, 30), 
    new Thruster(0, 40),
    new Thruster(0, 50), 
    new Thruster(0, 50), 
    new Thruster(0, 30),
    new Thruster(0, 10)   
]

let rocket2: Rocket = new Rocket("LDSFJA32", 6, thrusters2);

let rocketListModel: RocketListModel = new RocketListModel([rocket1, rocket2]);

let rocketListController: RocketListController = new RocketListController(rocketListModel, new RocketControllerView());

rocketListController.handleShowRocket(rocket1.id);
rocketListController.handleShowRocket(rocket2.id);
rocketListController.handleShowRocketList();
rocketListController.handleShowCurrentPower(rocket1.id);
rocketListController.handleShowCurrentPower(rocket2.id);

for (let i = 0; i < 8; i++) {
    rocketListController.handleAccelerateRocket(rocket1.id);
    rocketListController.handleShowCurrentPower(rocket1.id);
 }
for (let i = 0; i < 8; i++) {
    rocketListController.handleBreakRocket(rocket1.id);
    rocketListController.handleShowCurrentPower(rocket1.id);
}

for (let i = 0; i < 5; i++) {
    rocketListController.handleAccelerateRocket(rocket2.id);
    rocketListController.handleShowCurrentPower(rocket2.id);
}
for (let i = 0; i < 5; i++) {
    rocketListController.handleBreakRocket(rocket2.id);
    rocketListController.handleShowCurrentPower(rocket2.id);
}