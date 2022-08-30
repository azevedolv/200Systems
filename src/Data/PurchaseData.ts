
import { CustomError } from "../Error/CustomError";
import { BaseData } from "./BaseData"

const nomeTabela = "purchases_200systems"

export class PurchaseData extends BaseData {


    public async postPurchase(purchase: {}): Promise<void | undefined> {
        try {
            await PurchaseData
                .connection(nomeTabela)
                .insert(purchase)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }



    public async getPurchases(): Promise<void> {
        try {
            const results = await PurchaseData.connection.raw("SELECT * FROM purchases_200systems;")

            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


}