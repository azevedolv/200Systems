import React, { useState } from 'react';
import { Body, GlobalStyle, HomeContainer, LeftSide, RightSide, TableDiv } from './styled';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';
import { useNavigate } from 'react-router-dom';
import { getIndications } from '../../services/indicationSystem';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import {Table} from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import { goToIndex } from '../../routes/coordinator';
import { useGlobal } from '../../context/global/GlobalStateContext';

function Admin() {
    const navigate = useNavigate();
    const [showDetails, setShowDetails] = useState(false)
    const {states, setters} = useGlobal()

    const {indications} = states
    const {setIndications} = setters

    const [buyers] = useRequestData(`${BASE_URL}/buyers`, [])

    const viewDetails = (person_code) =>{
        getIndications(person_code, setIndications)
        if(showDetails === true){
            setShowDetails(false)
        }
        if(showDetails === false){
            setShowDetails(true)
        }
    }
 const tableMap = buyers && buyers.map((buyer)=>{
    return(
      <>
        <tr>
          <td onClick={()=>{viewDetails(buyer.person_code)}}>{buyer.person_name}</td>
          <td>{buyer.points}</td>
        </tr>
        </>
    )
  })

  return (
    <Body>
      <GlobalStyle />
      <header>
      <HomeIcon onClick={()=>{goToIndex(navigate)}}/>
      </header>
      <main>
        <HomeContainer>
        <LeftSide>
        <TableDiv>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Person</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {tableMap}
      </tbody>
    </Table>
    </TableDiv>
        </LeftSide>
        <RightSide>
            {showDetails === true ?
    <DetailsCard indications={indications}/>
    :
    <>
    </>
    } 
        </RightSide>
        </HomeContainer>
      </main>
    </Body>
  )
}

export default Admin 