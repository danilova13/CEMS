import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

const eventCard = ({event}) => {
	return ( 
		<Card sx={{ minWidth: 345 }}>
		 <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="events">
            CEMS
          </Avatar>
        }
		titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={event.nameEvent}
        subheader=""
     	 />
		<CardContent>
		  <Typography variant="body2" color="text.secondary">
			{event.eventDescription}
		  </Typography>
		</CardContent>
		<CardActions>
		  <Button size="small" sx={{color: '#dd2c00', fontWeight: 'bold'}}>Sign Up</Button>
		</CardActions>
	  </Card>
	);
  }

  export default eventCard;