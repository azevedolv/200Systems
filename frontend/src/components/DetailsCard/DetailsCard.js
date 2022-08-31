import * as React from 'react';
// import Box from '@mui/material/Box';

import { useState } from 'react';
import { useGlobal } from '../../context/global/GlobalStateContext';
import { TableDiv } from '../../pages/Admin/styled';
import {Table} from 'react-bootstrap';


export default function DetailsCard({indications}) {
  
  

  const tableMap = indications.indications && indications.indications.map((buy)=>{

    return(
      <>
        <tr key={buy.buyer_code}>
          <td>{buy.buyer_code }</td>
          <td>{buy.product_name}</td>
          <td>{buy.indication_code}</td>
          <td>{buy.dtBuy}</td>
        </tr>
        </>
    )
  })
  return (
    <TableDiv>
      <p>Indicator's Name: {indications.person_name}</p>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Buyer Code</th>
          <th>Product Name</th>
          <th>Code Used</th>
          <th>Date Buy</th>
        </tr>
      </thead>
      <tbody>
        {tableMap}
      </tbody>
    </Table>
    </TableDiv>
  );
}
