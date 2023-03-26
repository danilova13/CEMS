import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

const eventCard = ({ event }) => {
  let count = 0;
  const paid = true;

  const handleClick = (e) => {
    // change below endpoint after fixing backend controller
    // could replace with get request and modify logic in controller
    if (count < 1) {
      fetch("http://localhost:8080/events/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paid),
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

        count++;
    }
  };

  return (
    <Card sx={{ minWidth: 345 }}>
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

export default eventCard;
