import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";

const CreateEvent = ({eventModalHandleClick}) => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const defaultData = {nameEvent: "", dateEvent:"", locationEvent: "", costEvent: 0, eventDescription: "",};
  const [eventData, setEventData] = useState(defaultData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(111,JSON.stringify(eventData));

    fetch("http://localhost:8080/events/",{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(eventData)
		})
		.then ((res) => {
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
		})

    eventModalHandleClick()
  }

  const handleChange = (e) => {
   const {name, value} = e.target;
   setEventData(prev => ({...prev, [name]: value}))
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Name of the club"
            variant="outlined"
            name="nameClub"
            value={eventData.nameClub}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label="Event date"
            type="date"
            variant="outlined"
            name="dateEvent"
            defaultValue={eventData.dateEvent} //review this
            onChange={handleChange}
            />

          <TextField
            id="outlined-basic"
            label="Event Location"
            variant="outlined"
            name="locationEvent"
            value={eventData.locationEvent}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label="Event cost"
            variant="outlined"
            name="costEvent"
            type="number"
            value={eventData.costEvent}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label="Event description"
            variant="outlined"
            name="eventDescription"
            value={eventData.eventDescription}
            onChange={handleChange}
            />
          <br />
          <Button
            style={{
              maxWidth: "60px",
              maxHeight: "40px",
              backgroundColor: "#FC9F26",
              color: "#fffff",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            variant="contained"
            type="submit"
            >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default CreateEvent;
