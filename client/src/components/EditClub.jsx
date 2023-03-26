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

  
  const [club, setClub] = useState("");
  const[dbClubs, setDbClubs] = useState([]);
  const selectedClub = dbClubs.find(dbClub => dbClub.nameClub == club);
  
  console.log(111, selectedClub);

  React.useEffect(() => {
    fetch("http://localhost:8080/clubs/", { //review this line
        method: "GET",
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
  
          throw new Error("invalid input");
        })
        .then((data) => {
          console.log(121, data);
          setDbClubs(prev => data)
        })
        .catch((err) => {
          console.log(err);
        });
  
    return () => {
  
    }
  }, [])

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
      <FormControl sx={{ m: 1, minWidth: 532 }}>
        <InputLabel id="club">Select a club to edit</InputLabel>
        <Select
          labelId="Select a club to edit"
          id="club"
          name="clubName"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          label="Select a club to edit"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {dbClubs.map((club) => (
                <MenuItem
                  key={club.nameClub}
                  value={club.nameClub}
                >
                  {club.nameClub}
                </MenuItem>
              ))}
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
            label={selectedClub.nameClub|| "Name of the club"}
            variant="outlined"
            name="nameClub"
            value={clubData.nameClub}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label={selectedClub.clubDescription|| "Club description"}
            variant="outlined"
            name="clubDescription"
            value={clubData.clubDescription}
            onChange={handleChange}
            />
          <TextField
            id="outlined-basic"
            label={selectedClub.imageString|| "Club image url"}
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
