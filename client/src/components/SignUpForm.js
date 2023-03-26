import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import { Close } from '@mui/icons-material';


const SignUpForm = ({ onClose, onSubmit }) => {
	const paperStyle = { padding: "50px 20px", width: 400, margin: "20px auto", boxShadow: 'none'};
	
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
				 	sx={{ position: 'absolute', top: '10px', right: '10px'}} 
					onClick={onClose} disableElevation disableRipple>
           			 <Close />
				</IconButton>
				<Typography>
					<Typography paragraph sx={{fontSize: 20, fontWeight:'bold'}}>
						Press Sign Up button to successfuly join the club 
					</Typography>
				</Typography>
				<br />
				<Button
					onClick={onSubmit}
					type="submit"
					style={{
						minWidth: "60px",
						minHeight: "40px",
						backgroundColor: "#d3d3d3",
						color: "#003366",
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