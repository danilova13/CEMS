import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, Box, Typography} from "@mui/material";
import EventCard from "./EventCard";

const EventCarousel = () => {

  const [ events, setEvents] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/events/`)
      .then(res => res.json())
      .then(data => setEvents(prev => data))
  }, [])

  return (

    <div className="w-full flex flex-col items-center">
      <Carousel 
        className="w-[50%]"
        animation="slide"
        newButtonsAlwaysVisible={true}
        duration={1500}
      >
         {events.map(event => (
            <Grid container justifyContent="center">
              <Grid item key={event.eventId}>
                <EventCard className="h-[50vh] w-full rounded-lg shadow-xl" event={event}></EventCard>
              </Grid>
            </Grid>
          ))}
          
       
      </Carousel>
    </div>
  );
};

export default EventCarousel;
