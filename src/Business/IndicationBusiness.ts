import { BuyerData } from "../Data/BuyerData"
import { PurchaseData } from "../Data/PurchaseData"
import { CustomError } from "../Error/CustomError"

import { BuyerInputDTO, IndicationInputDTO, PurchaseInputDTO } from "../Model/types"
import { generateId } from "../Services/IdGenerator"
import { generateIndicationCode } from "../Services/IndicationCode"


export class IndicationBusiness {


    async postPurchase(purchase: IndicationInputDTO) {
        try {
            const { person_name, product_name, indication_code } = purchase

            if (!product_name || !person_name ) { throw new CustomError(422, `Please, review the parameters sent! `) }

            const createIndicationCode = generateIndicationCode()

            if(!indication_code){                
                
                    const generateID = generateId()
                   
                    const newBuyer:BuyerInputDTO = {
                    person_code:generateID,
                    person_name,
                    indication_code: createIndicationCode,
                    points: 0
                   }
                   
                   await new BuyerData().postBuyer(newBuyer)

                   const dtBuy = new Date().toISOString().slice(0, 10)

                    const newPurchase: PurchaseInputDTO= {
                        buyer_code: generateID,
                        product_name,
                        dtBuy
                    }
                    
                    const purchaseData = new PurchaseData()
                    await purchaseData.postPurchase(newPurchase) //dependencia

                }

            if(indication_code){
                const consultIndicationCode = await new BuyerData().getBuyerByIndicationCode(indication_code)

                if (!consultIndicationCode) {
                    throw new CustomError(404, "Indication code not found.")
                }
    
                if (consultIndicationCode && consultIndicationCode.person_name === person_name) {
                    throw new CustomError(422, "The user can not use your own indication code for a purchase.")
                }

                if (consultIndicationCode && consultIndicationCode.person_name !== person_name) {
                    const generateID = generateId()
                   
                    const newBuyer:BuyerInputDTO = {
                    person_code: generateID,
                    person_name,
                    indication_code: createIndicationCode,
                    points: 0
                   }

                   await new BuyerData().postBuyer(newBuyer)

                   const dtBuy = new Date().toISOString().slice(0, 10)
    
                const newPurchase: PurchaseInputDTO= {
                        buyer_code: generateID,
                        person_code_indication:consultIndicationCode.person_code,
                        product_name,
                        dtBuy,
                        indication_code
                    }
                    
                    const purchaseData = new PurchaseData()//dependencia
                    await purchaseData.postPurchase(newPurchase) 

                    const newPoints:number = consultIndicationCode.points + 1
                    await new BuyerData().updateBuyerPoints(newPoints, consultIndicationCode.person_code) //dependência
                }
            }

            return createIndicationCode
            
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }


    async getBuyers() {
        try {
            const results = await new BuyerData().getBuyers()

            return results
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

    async getBuyerByCode(person_code:number) {
        try {
            const whoIndicated = await new BuyerData().getBuyerByPersonCode(person_code)
            if(!whoIndicated){
                throw new CustomError(404, "Buyer not found.");
            }
            
            const purchases = await new PurchaseData().getpurchase()
            const filterPurchases = purchases && purchases.filter((buy)=>{
                return buy.indication_code === whoIndicated.indication_code
            })

           
            const output = {
                person_name: whoIndicated.person_name,
                indication: filterPurchases
            }
            return output
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }

}
