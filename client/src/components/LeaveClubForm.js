import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import { Close } from '@mui/icons-material';


const LeaveClubForm = ({ onClose, onSubmit }) => {
	const paperStyle = { 
		padding: "10px 10px", 
		width: 400, margin: "100px auto", 
		boxShadow: 'none',
		position: 'relative'
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
				 	sx={{ 
						position: 'absolute', 
						top: '1px', right: '1px',
						display:'flex', justifyContent: 'flex-end'
					}}
					onClick={onClose} disableElevation disableRipple>
           			 <Close />
				</IconButton>
				<Typography>
					<Typography paragraph sx={{fontSize: 20, fontWeight:'bold', pt: 5}}>
						Press leave club button to leave the club 
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
				Leave Club 
				</Button>

			</Box>
			</Paper>
	  </Container>


	);
}
 
export default LeaveClubForm;