import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ButtonGroupProps } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

export default function ClubListCard({club}){
	return ( 
		<Card sx={{ minWidth: 345 }}>
		 <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
		titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={club.clubName}
        subheader=""
     	 />

		<CardMedia
		  sx={{ minHeight: 260 }}
		  image={require(`../images/${club.clubImage}`)}
		  title="club_image"
		/>
		<CardContent>
		  <Typography variant="body2" color="text.secondary">
			{club.clubDescription}
		  </Typography>
		</CardContent>
		<CardActions>
		  <Button size="small" sx={{color: '#dd2c00', fontWeight: 'bold'}}>Sign Up</Button>
		</CardActions>
	  </Card>
	);
  }

