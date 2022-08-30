import { BuyerData } from "../Data/BuyerData"
import { PurchaseData } from "../Data/PurchaseData"
import { CustomError } from "../Error/CustomError"
import { PurchaseInputDTO } from "../Model/Purchase"
import { generateIndicationCode } from "../Services/IndicationCode"





export class PurchaseBusiness {


    async postPurchase(purchase: PurchaseInputDTO) {
        try {
            const { product_name, person_name, indication_code } = purchase
            // console.log(product_name);
            


            if (!product_name || !person_name ) { throw new CustomError(422, `Please, review the parameters sent! `) }

            // if (person_name.indexOf("@") === -1) {
            //     throw new Error("Invalid person_name!")
            // }
            // // verificando se o person_name possui o formato correto contendo um @.
            // if (indication_code.length < 6) {
            //     throw new Error("indication_code must have at least 6 characters!")
            // }

            const consultIndicationCode = await new BuyerData().getBuyerByIndicationCode(indication_code)
            // console.log(consultPurchases);
            if (!consultIndicationCode) {
                throw new CustomError(404, "Indication code not found.")
            }

            if (consultIndicationCode && consultIndicationCode.person_name === person_name) {
                throw new CustomError(422, "The user can not use your own indication code for your purchase.")
            }
            const createIndicationCode = generateIndicationCode()
            console.log(createIndicationCode);
            
            
            if (consultIndicationCode && consultIndicationCode.person_name !== person_name) {
               
                const newPurchase = {
                    product_name,
                    person_name,
                    indication_code 
                }
                const purchaseData = new PurchaseData()
                await purchaseData.postPurchase(newPurchase) //dependencia
            }
            
            // const token: string = new Authenticator().generateToken({ id })

            // return token



        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }


    async getBuyers() {
        try {
            const results = await new BuyerData().getBuyers()
            // console.log(results);

            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getBuyerByCode(person_code:number) {
        try {
            const results = await new BuyerData().getBuyerByPersonCode(person_code)
            // console.log(results);

            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

}
