import { Request, Response } from "express";
import { IndicationBusiness } from "../Business/IndicationBusiness";

export class IndicationController {
    constructor(
        private indicationBusiness: IndicationBusiness
    ) { }

    public postPurchase = async (req: Request, res: Response) => {
        try {

            const { product_name, person_name, indication_code } = req.body

            const purchase = { person_name, product_name, indication_code }
            // console.log(Indication);

            const result = await this.indicationBusiness.postPurchase(purchase)
            // console.log(result);

            res.status(201).send({ message: "Successful purchase!", indication_code: result })

        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    getBuyers = async (req: Request, res: Response) => {
        try {
            const {person_code} = req.body
            if(!person_code){
                const buyers = await this.indicationBusiness.getBuyers()
                res.status(200).send({ buyers })
            }
            if(person_code){
                const result = await this.indicationBusiness.getBuyerByCode(person_code)
                res.status(200).send(result)
            }
        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }

    
} 