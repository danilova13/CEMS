import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Grid} from "@mui/material";
import EventCard from "./EventCard";

const EventCarousel = ({clubId}) => {

  const [ events, setEvents] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8080/clubs/${clubId}/events`)
      .then(res => res.json())
      .then(data => setEvents(prev => data))
  }, [])
  
  return (
    <div className="w-[50%] flex flex-col items-end">
      <Carousel 
        className="w-full !max-h-[70vh]"
        animation="slide"
        newButtonsAlwaysVisible={true}
        duration={1500}
      >
         {events.map(event => (
            <Grid item key={event.idEvent} container justifyContent="center">
              <Grid >
                <EventCard className="!max-h-[70vh] rounded-lg shadow-xl" event={event}></EventCard>
              </Grid>
            </Grid>
          ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
