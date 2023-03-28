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
import {useEffect, useState} from "react";

const Club = () => {
	const search = useLocation().search;
	const idClub = new URLSearchParams(search).get("id");
	const [club, setClub] = useState({});

	useEffect(() => {
    fetch(`http://localhost:8080/clubs/${idClub}`)
      .then(res => res.json())
      .then(data => setClub(prev => data))
		}, [])
		
	return ( 
		<div>
<Card sx={{ minWidth: 345 }}>
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

	{club ? (	<CardMedia
		  sx={{ minHeight: 260 }}
		  image={require(`../images/${club?.imageString}`)}
		  title="club_image"
		/>):
	(	<CardMedia
		  sx={{ minHeight: 260 }}
			src={``}
		  title="club_image"
		/>)}

		<img src={`../images/${club.imageString}`}></img>
		<CardContent>
		  <Typography variant="body2" color="text.secondary">
			{club?.clubDescription}
		  </Typography>
		</CardContent>
	  </Card>
			{/* <EventCarousel clubId={idClub}></EventCarousel> */}
		</div>
	 );
}
 
export default Club;