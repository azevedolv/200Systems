export interface BuyerInputDTO {
    person_code: string | any
    person_name: string;
    indication_code?: string;
    points: number
}
export interface BuyerOutputDTO {
    person_code: string | any
    person_name: string;
    indication_code: string;
    points: number
}
export interface PurchaseInputDTO {
    buyer_code: string | any,
    person_code_indication?: string,
    product_name: string,
    dtBuy: string,
    indication_code?: string
}
export interface IndicationInputDTO {
    product_name: string;
    person_name: string;
    indication_code: string;
}