import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditClub = ({clubModalHandleClick}) => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const defaultData = {nameClub: "", clubDescription: "", imageString: "",};
  const [clubData, setClubData] = useState(defaultData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(111,JSON.stringify(clubData));

    fetch("http://localhost:8080/clubs/",{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(clubData)
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

    clubModalHandleClick()
  }

  const handleChange = (e) => {
   const {name, value} = e.target;
   setClubData(prev => ({...prev, [name]: value}))
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
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
            value={clubData.nameClub}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label="Club description"
            variant="outlined"
            name="clubDescription"
            value={clubData.clubDescription}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label="Club image url"
            variant="outlined"
            name="imageString"
            value={clubData.imageString}
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

export default EditClub;
