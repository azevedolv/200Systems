export class Purchase {
    constructor(
        private id: string,
        private purchaseName: string,
        private email: string,
        private password: string,

    ) { }

    getId = (): string => {
        return this.id
    }
    
    getPurchasename = (): string => {
        return this.purchaseName
    }
    getEmail = (): string => {
        return this.email
    }
    getPassword = (): string => {
        return this.password
    }
    setId(id: string){
        this.id = id;
    }
    setPurchasename(name: string){
        this.purchaseName = name;
    }

    setEmail(email: string){
        this.email = email;
    }  
    setPassword(password: string){
        this.password = password;
    }  
}

export interface PurchaseInputDTO {
        product_name: string;
        person_name: string;
        indication_code: string;
}
export interface PurchaseOutputDTO {
    id:string
    Purchasename: string,
    email: string,
    password: string
}

export interface AuthenticationData {
    id: string
}