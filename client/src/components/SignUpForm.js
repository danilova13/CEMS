import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import { Close } from '@mui/icons-material';


const SignUpForm = ({ onClose, onSubmit }) => {
	const paperStyle = { 
		padding: "10px 10px", 
		width: 400, margin: "100px auto", 
		boxShadow: 'none', 
		position: "relative"
	};
	
	return (  
		<Container>
			<Paper elevation={3} style={paperStyle}>
			<Box
				component="form"
				sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
				noValidate
				autoComplete="off"
				onSubmit={onSubmit}
			>
				 <IconButton 
				 	sx={{ position: 'absolute', 
					top: '2px', right: '2px',
					display:'flex', justifyContent: 'flex-end'
				}} 
					onClick={onClose} disableRipple>
           			 <Close />
				</IconButton>
				<Typography>
					<Typography component={'div'} sx={{fontSize: 20, fontWeight:'bold'}}>
						<br />
						Press Sign Up button to join the club 
					</Typography>
				</Typography>
				<br />
				<Button
					onClick={onSubmit}
					type="submit"
					style={{
						minWidth: "60px",
						minHeight: "40px",
						backgroundColor: "#FFAC1C",
						color: "white",
						fontWeight: "bold",
						fontSize: "12px",
					}}
				>
				Sign Up 
				</Button>
			</Box>
			</Paper>
	  </Container>


	);
}
 
export default SignUpForm;