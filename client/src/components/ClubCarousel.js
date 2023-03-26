// import ClubCard from "./ClubCard";
import { Grid, Box, Typography} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import ClubListCard from "./ClubListCard";

const ClubCarousel = () => {

  const [ clubs, setClubs] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/clubs/`)
      .then(res => res.json())
      .then(data => setClubs(data))
  }, [])

  return (

    <div className="w-full flex flex-col items-center">
      <Carousel 
        className="w-[50%]"
        animation="slide"
        newButtonsAlwaysVisible={true}
        duration={1500}
      >
         {clubs.map(club => {
                console.log(club.clubId);
                return <ClubListCard key={club.idClub} className="h-[50vh] w-full rounded-lg shadow-xl" club={club}/>
         })}
       
      </Carousel>
    </div>
  );
};

export default ClubCarousel;
