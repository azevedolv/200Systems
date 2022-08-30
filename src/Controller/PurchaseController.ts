import { Request, Response } from "express";
import { PurchaseBusiness } from "../Business/PurchaseBusiness";
import { PurchaseOutputDTO } from "../Model/Purchase";


export class PurchaseController {
    constructor(
        private purchaseBusiness: PurchaseBusiness
    ) { }

    public postPurchase = async (req: Request, res: Response) => {
        try {

            const { product_name, person_name, indication_code } = req.body

            const purchase = { product_name, person_name, indication_code }
            // console.log(purchase);

            const token = await this.purchaseBusiness.postPurchase(purchase)
            // console.log(token);

            res.status(201).send({ message: "Successful purchase!", token })

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

            // const token:PurchaseOutputDTO = await this.purchaseBusiness.getBuyers()
            // if (!token) {
            //     res.statusCode = 400
            //     throw new Error("indication_code incorrect!")
            // }


            // res.status(200).send({ message: "Purchase logged in successfully!", token })

        } catch (error: any) {
            const { statusCode, message } = error
            if (statusCode === 200) {
                res.status(500).send(`Unexpected error!`)
            } else {
                res.status(statusCode || 400).send({ message });
            }
        }
    }
    getBuyerByCode = async (req: Request, res: Response) => {
        try {

            const { person_code} = req.body


            const token = await this.purchaseBusiness.getBuyerByCode(person_code)
            if (!token) {
                res.statusCode = 400
                throw new Error("indication_code incorrect!")
            }


            res.status(200).send({ message: "Purchase logged in successfully!", token })

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