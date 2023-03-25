import { Box, Container } from "@mui/system";
import ClubCarousel from "../components/ClubCarousel";

const ClubList = () => {
	return (  
		<Box pl={3} pb={15} pt={5}>

			<Box style={{fontWeight: 'bold', fontSize: 35, textAlign: 'center'}}> List of Clubs </Box>
			<br/>

			<ClubCarousel />


		</Box>
		
		
	);
}
 
export default ClubList;