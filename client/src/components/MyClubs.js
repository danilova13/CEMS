import ClubCard from "./ClubCard";
import { Grid, Box, Typography } from "@mui/material";
import { useState } from "react";


const MyClubs = () => {

	const [ clubId, setClubId ] = useState('');
	const [ clubName, setClubName ] = useState('');
	const [ clubDescription, setClubDescription] = useState('');
	const [ imageName, setImageName ] = useState('');

	return (
		<div>
			<h2>My Clubs</h2>
			<Box m={2} pl={3}> 
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6} md={4} lg={3}> 
						<ClubCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}> 
						<ClubCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}> 
						<ClubCard />
					</Grid>
			 	</Grid>

			</Box>
		</div>

		
	  );
}
 
export default MyClubs;