import ClubCard from "./ClubCard";
import { Grid, Box, Typography} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { Container } from "@mui/system";
import useAuth from "../hooks/useAuth";


const MyClubs = () => {

	const [ clubs, setClubs ] = useState([]);
	const { auth } = useAuth();

	useEffect(() => {
		fetch(`http://localhost:8080/users/${auth.id}/clubs`)
			.then(res => res.json())
			.then(data => setClubs(data))
	}, [])

	return (
		<Box pl={3} pb={4}>
			<Box sx={{fontWeight: 'bold', fontSize: 'h4', pb: 3, textAlign: 'left'}}> My Clubs </Box>

			<Grid container spacing={4}>
				{clubs.map(club => (
					<Grid item key={club.idClub} xs={12} sm={6} md={4} lg={3}> 
						<ClubCard club={club}/>
					</Grid>
				))}

			</Grid>
		</Box>
	  );
}
 
export default MyClubs;