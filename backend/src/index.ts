import { app } from "./app";
import { IndicationBusiness } from "./Business/IndicationBusiness";
import { IndicationController } from "./Controller/IndicationController";

//Indication
const indicationBusiness = new IndicationBusiness()
const indicationController = new IndicationController(indicationBusiness)
app.get("/buyers", indicationController.getBuyers)
app.get("/buyers/:person_code", indicationController.getBuyerIndications)
app.post("/purchase", indicationController.postPurchase)

