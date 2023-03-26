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
    <div className="w-full flex flex-col items-end">
      <Carousel 
        className="w-[50%] h-full"
        animation="slide"
        newButtonsAlwaysVisible={true}
        duration={1500}
      >
         {events.map(event => (
            <Grid item key={event.idEvent} container justifyContent="center">
              <Grid >
                <EventCard className="max-h-[70vh] rounded-lg shadow-xl" event={event}></EventCard>
              </Grid>
            </Grid>
          ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
