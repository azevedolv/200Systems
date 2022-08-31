
import { CustomError } from "../Error/CustomError";
import { PurchaseInputDTO } from "../Model/types";
import { BaseData } from "./BaseData"

const nomeTabela = "purchase_200systems"

export class PurchaseData extends BaseData {


    public async postPurchase(purchase: PurchaseInputDTO): Promise<void | undefined> {
        try {
            await PurchaseData
                .connection(nomeTabela)
                .insert(purchase)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }



    public async getpurchase(): Promise<void | any[]> {
        try {
            const results = await PurchaseData
            .connection(nomeTabela)
            .select("*")
            // .where({ indication_code })
            return results;
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


}