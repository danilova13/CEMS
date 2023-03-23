import { Box, Container } from "@mui/system";
import MyClubs from "./MyClubs";
import ClubCarousel from "../components/ClubCarousel";

const ClubList = () => {
	return (  
		<Container>

			<Box sx={{fontWeight: 'bold', fontSize: 'h1', pb: 3, textAlign: 'center'}}> List of Clubs </Box>


			<ClubCarousel />

			

		

		</Container>
		
		
	);
}
 
export default ClubList;