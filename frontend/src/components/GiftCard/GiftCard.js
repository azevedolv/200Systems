import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function GiftCard({indication_code, giftMessage, successfulMessage}) {
 


  return (
    <>
    {giftMessage
    ? 
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Congrats!
        </Typography>
        <Typography variant="h5" component="div">
          {giftMessage}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          R${successfulMessage}
        </Typography>
        <Typography variant="body2">
          {indication_code}
        </Typography>
      </CardContent>
    </Card>
    </>
    :
    <>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
          {successfulMessage}
        </Typography>
        <Typography variant="body2">
          Indication Code: {indication_code}
        </Typography>
      </CardContent>
    </Card>
    </>
    }
    </>
    
  );
}
