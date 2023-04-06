import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import useAuth from '../hooks/useAuth';

const EventCard = ({ event }) => {
  let count = 0;
  const { auth, setAuth } = useAuth();

  const handleClick = (e) => {
    if (count < 1) {
      fetch(`http://localhost:8080/users/${auth.id}/events/${event.idEvent}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("invalid input");
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
        alert('Successfully registered for the event');
        count++;
    }
  };

  return (
    <Card sx={{ maxWidth: 400, height: 300 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500], fontSize: 10, fontWeight: "bold" }}
            aria-label="events"
          >
            CEMS
          </Avatar>
        }
        titleTypographyProps={{ variant: "h6", fontWeight: "bold" }}
        title={event.nameEvent}
        subheader=""
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {event.eventDescription}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-around">
        <Button
          onClick={handleClick}
          size="small"
          sx={{ color: "#dd2c00", fontWeight: "bold" }}
        >
          Register
        </Button>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#dd2c00", fontWeight: "bold" }}
        >
          {`${event.costEvent}$`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default EventCard;
