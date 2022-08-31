import axios from 'axios';
import { BASE_URL } from '../constants/urls';

export   const postPurchase = (form, clear, setIndication_code, setGiftMessage, setSuccessfulMessage) =>{
    const url = `${BASE_URL}/purchase`;
    const headers = {
            'Content-Type': 'application/json'
    }
    const body = {
        "person_name": form.person_name,
        "product_name": form.product_name,
        "indication_code": form.indication_code
    }
    // console.log(body);
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response);
        setIndication_code(response.data.indication_code)
        setGiftMessage(response.data.gift)
        setSuccessfulMessage(response.data.message)
        clear()
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
        alert(error.response.data)
        console.log(error.response.data)
        } else {
            alert(error.response.data.message)
        console.log(error.response.data.message)
        }
    })
}

    export   const getIndications = (person_code, setIndications) =>{
        const url = `${BASE_URL}/buyers`;
        const headers = {
                'Content-Type': 'application/json'
        }
        const body = {
            "person_code": person_code,
        }
        // console.log(body);
        axios.get(url, body, headers)
        .then((response) =>{
            console.log(response);
            setIndications(response.data)
        })
        .catch((error) =>{
            if(error.response.data.message === undefined){
            alert(error.response.data)
            console.log(error.response.data)
            } else {
                alert(error.response.data.message)
            console.log(error.response.data.message)
            }
        })
}
