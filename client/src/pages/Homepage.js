import MyClubs from "../components/MyClubs";
import ClubList from "../components/ClubList";
import ClubCarousel from "../components/ClubCarousel";


const Homepage = () => {
	return (  
	<div>
		<MyClubs />
		<ClubCarousel></ClubCarousel>

		<ClubList />

	</div>
	
		
	);
}
 
export default Homepage;
