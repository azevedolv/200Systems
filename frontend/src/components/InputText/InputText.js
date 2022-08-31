import * as React from 'react';
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import { postPurchase } from '../../services/indicationSystem';
import { Button } from '@mui/material';
import { FormDiv } from '../../pages/Index/styled';


export default function InputText({setIndication_code, setGiftMessage, setSuccessfulMessage}) {
    const {form, onChange, clear} = useForm({person_name:"", product_name:"", indication_code:"" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        postPurchase(form, clear, setIndication_code, setGiftMessage, setSuccessfulMessage);
    }
  return (
    <FormDiv>
    <form onSubmit={onSubmitForm}>
                        <TextField //input do @mui com as próprias propriedades
                            name={'person_name'}
                            value={form.person_name}
                            onChange={onChange}
                            label={'Name'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'text'} />
                        <TextField
                            name={'product_name'}
                            value={form.product_name}
                            onChange={onChange}
                            label={'Product'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'text'} />
                        <TextField
                            name={'indication_code'}
                            value={form.indication_code}
                            onChange={onChange}
                            label={'Indication Code'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'text'} />
                        <div>
                            <Button
                                type={'submit'}
                                variant='contained'
                                color='primary'
                                margin={'normal'}
                                fullWidth>
                                Buy it now!
                            </Button>
                        </div>
                    </form>
                    </FormDiv>
  );
}