import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper} from '@mui/material';
import { color } from '@mui/material/colors';
import { useState } from 'react';
import Button from '@mui/material/Button';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Image from '../images/photo5.jpg'
import Popover from '@mui/material';



export default function Login() {

	const paperStyle = {padding: '50px 20px', width: 600, margin:'20px auto' };
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');

	const { setAuth } = useAuth();

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = { email, password };
		
		fetch("http://localhost:8080/users/login",{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(user)
		})
		.then ((res) => {
			if (res.ok) {
				return res.json();
			}

			throw new Error("invalid input");
		})
		.then((data) => {
			console.log(data);
			setAuth(data);
			//navigating to from value - where the user wanted to go before they were sent to the login page
			navigate(from, {replace: true }); 
		})
		.catch((err) => {
			console.log(err);
			setErrorMsg("Invalid username or password");
		})
	}
  
	return (
	<Container> 
		<Paper elevation={3} style={paperStyle}>
			<h1 style={{color: 'black'}}>Log-in</h1>
			<Box component="form"
				sx={{'& > :not(style)': { m: 1, width: '40ch' },}} noValidate autoComplete="off"
			>
				<TextField id="email-input" label="User email" variant="outlined"
				value={ email }
				onChange={(e) => setEmail(e.target.value)}
				/> 

				<TextField id="password-input" label="password" variant="outlined"
				type="password"
				value={(password)}
				onChange={(e) => setPassword(e.target.value)}
				/> <br/>
				
				<Button onClick={handleSubmit}  style={{maxWidth: '60px', maxHeight:'40px', backgroundColor: '#d3d3d3', color: '#003366', 
					fontWeight: 'bold', fontSize: '12px'}} 
					variant="contained">Submit</Button>

			 	{errorMsg && (<div className="popuptext"><p className="error"> {errorMsg}</p> </div>)} 
			
			</Box>
		</Paper>
		<Box sx={{}}>
			<img src={Image} sx={{}}></img>
		</Box>

	</Container>
  );
}