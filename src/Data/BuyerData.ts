
import { CustomError } from "../Error/CustomError";
import { BuyerInputDTO } from "../Model/types";
import { BaseData } from "./BaseData"

const nomeTabela = "buyers_200systems"

export class BuyerData extends BaseData {


    public async postBuyer(buyer: BuyerInputDTO): Promise<void | undefined> {
        try {
            await BuyerData
                .connection(nomeTabela)
                .insert(buyer)
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async updateBuyerPoints (points:number, person_code:string): Promise<void | undefined> {
        try {
            await BuyerData
            .connection(nomeTabela)
            .update({points})
            .where({person_code})
            
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

    public async getBuyers(): Promise<void> {
        try {
            const results = await BuyerData.connection.raw("SELECT person_code, person_name, points FROM buyers_200systems ORDER BY points DESC;")

            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


    public async getBuyerByPersonCode(person_code: number): Promise<any> {
        try {
            const results = await BuyerData
                .connection(nomeTabela)
                .select("*")
                .where({ person_code })
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }


    public async getBuyerByIndicationCode(indication_code: string): Promise<any> {
        try {
            const results = await BuyerData
                .connection(nomeTabela)
                .select("*")
                .where({ indication_code })
            return results[0];
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }

}