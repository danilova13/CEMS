import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import EventCarousel from "../components/EventCarousel";
import { useLocation } from "react-router-dom";
import useAuth from '../hooks/useAuth';

const Club = () => {
	const search = useLocation().search;
	const idClub = new URLSearchParams(search).get("id");
	const {auth, setAuth} = useAuth();

	const club = auth.enrolledClubs.find(club => club.idClub == idClub)

	return ( 
		<div className="flex justify-between">
{/* <Card sx={{ maxWidth: 500 }}> */}
<Card className="ml-5 flex flex-col justify-around !w-[50%] !h-[70vh]">
		 <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
		titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={club?.nameClub}
        subheader=""
     	 />
		<CardMedia
		  sx={{ minHeight: 500 }}
		  image={require(`../images/${club?.imageString}`)}
		  title="club_image"
		/>
		<CardContent>
		  <Typography variant="body2" color="text.secondary">
			{club?.clubDescription}
		  </Typography>
		</CardContent>
	  </Card>
			<EventCarousel clubId={idClub}></EventCarousel>
		</div>
	 );
}
 
export default Club;