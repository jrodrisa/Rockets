// crees dades inicials (rocket i controlador)

let rocketListController: RocketListController = new RocketListController(new RocketListModel(), new RocketControllerView());

let rocket1: Rocket = rocketListController.createRocket("32WESSDS");
let rocket2: Rocket = rocketListController.createRocket("LDSFJA32");

rocketListController.handleShowRocket(rocket1.id);
rocketListController.handleShowRocket(rocket2.id);
rocketListController.handleShowRocketList();
rocketListController.handleShowCurrentPower(rocket1.id);
rocketListController.handleShowCurrentPower(rocket2.id);

// for (let i = 0; i < 8; i++) {
//     rocketListController.handleAccelerateRocket(rocket1.id);
//     rocketListController.handleShowCurrentPower(rocket1.id);
//  }
// for (let i = 0; i < 8; i++) {
//     rocketListController.handleBreakRocket(rocket1.id);
//     rocketListController.handleShowCurrentPower(rocket1.id);
// }

// for (let i = 0; i < 5; i++) {
//     rocketListController.handleAccelerateRocket(rocket2.id);
//     rocketListController.handleShowCurrentPower(rocket2.id);
// }
// for (let i = 0; i < 5; i++) {
//     rocketListController.handleBreakRocket(rocket2.id);
//     rocketListController.handleShowCurrentPower(rocket2.id);
// }