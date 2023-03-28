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
import {Modal} from '@mui/material';
import { Container, Paper } from "@mui/material";
import SignUpForm from './SignUpForm';
import Box from "@mui/material/Box";
import { useState } from 'react';
import useAuth from '../hooks/useAuth';



export default function ClubListCard({club}){

	const [ showSignUpForm, setShowSignUpForm ] = useState(false);
	const displaySignUpForm = () => {
		setShowSignUpForm(true);
	}
	const hideSignUpForm = () => setShowSignUpForm(false);

	const { auth, setAuth } = useAuth();
	
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('You successfully signed up for a club');

		fetch(`http://localhost:8080/users/${auth.id}/clubs/${club.idClub}`, {
			method: "PUT",
			headers: {"Content-Type": "application/json"}
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			throw new Error('Failed to sign up');
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		})
	}

	return ( 
		<Card sx={{ minWidth: 345 }}>
		 <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
		titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={club.nameClub}
        subheader=""
     	 />

		<CardMedia
		  sx={{ minHeight: 260 }}
		  image={require(`../images/${club.imageString.trim()}`)}
		  title="club_image"
		/>
		<CardContent>
		  <Typography variant="body2" color="text.secondary">
			{club.clubDescription}
		  </Typography>
		</CardContent>

		<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
			<Button 
				className=""
				onClick={displaySignUpForm} 
				size="small" sx={{color: '#dd2c00', fontWeight: 'bold',buttonAlign: 'center'}}
			>
				Sign Up
			</Button>
		</CardActions>
		<Modal
			open={showSignUpForm}
			onClose={hideSignUpForm}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
      	>
			<Box>
				<SignUpForm onClose={hideSignUpForm} onSubmit={onSubmit} clubId={club.idClub}/>
			</Box>
      	</Modal>
	  </Card>
	);
  }

