import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";

const CreateClub = () => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  // const [clubName, setClubName] = useState("");
  // const [clubDescription, setClubDescription] = useState("");
  // const [clubImage, setclubImage] = useState("");
  const defaultData = {clubName: "", clubDescription: "", clubImage: "",};
  const [clubData, setClubData] = useState(defaultData);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setClubData(e)
    console.log(111,JSON.stringify(clubData));
  }

  const handleChange = (e) => {
   const {name, value} = e.target;
   setClubData(prev => ({...prev, [name]: value}))
  }

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} // review this
        >
          <TextField
            id="outlined-basic"
            label="Name of the club"
            variant="outlined"
            name="clubName"
            value={clubData.clubName}
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
            name="clubImage"
            value={clubData.clubImage}
            onChange={handleChange}
            />
          <br />
          <Button
            style={{
              maxWidth: "60px",
              maxHeight: "40px",
              backgroundColor: "#d3d3d3",
              color: "#003366",
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

export default CreateClub;
