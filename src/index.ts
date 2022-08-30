import { app } from "./app";
import { PurchaseBusiness } from "./Business/PurchaseBusiness";
import { PurchaseController } from "./Controller/PurchaseController";

//purchase
const purchaseBusiness = new PurchaseBusiness()
const purchaseController = new PurchaseController(purchaseBusiness)
app.get("/buyers", purchaseController.getBuyers)
app.get("/buyers/:code", purchaseController.getBuyerByCode)
app.post("/purchase", purchaseController.postPurchase)

