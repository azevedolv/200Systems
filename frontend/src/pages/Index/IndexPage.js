import React from 'react';
import { Body, GlobalStyle, HomeContainer, LeftSide, RightSide } from './styled';
// import useRequestData from '../../hooks/useRequestData'
// import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../../context/global/GlobalStateContext';
import InputText from '../../components/InputText/InputText';
import GiftCard from '../../components/GiftCard/GiftCard';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { goToAdmin } from '../../routes/coordinator';


function IndexPage() {
  const navigate = useNavigate()

  

  const {states, setters} = useGlobal()
  const {indication_code, giftMessage, successfulMessage} = states
  const {setIndication_code, setGiftMessage, setSuccessfulMessage} = setters

  

  return (
    
    <Body>
      <GlobalStyle />
      <header>
      <CoPresentIcon onClick={()=>{goToAdmin(navigate)}} />
      </header>
      <main>
        <HomeContainer>
      <LeftSide>
          <InputText setIndication_code={setIndication_code} setGiftMessage={setGiftMessage} setSuccessfulMessage={setSuccessfulMessage} />
      </LeftSide>
      <RightSide>
      <GiftCard indication_code={indication_code} giftMessage={giftMessage} successfulMessage={successfulMessage}/>
      </RightSide>
      </HomeContainer>
      </main>
    </Body>
  )
}

export default IndexPage 