import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Grid, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";

const Admin = () => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [clubName, setClubName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
          noValidate
          autoComplete="off"
        >
          <Grid container >
            <Grid container spacing={2} >
              <Grid items>
                <label>Name of club</label>
              </Grid>
              <Grid items xs={12} sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Enter the name of the club"
                  variant="outlined"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid items>
                <label>Name of club</label>
              </Grid>
              <Grid items>
                <TextField
                  id="outlined-basic"
                  label="Enter the name of the club"
                  variant="outlined"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} >
              <Grid items>
                <label>Name of club</label>
              </Grid>
              <Grid items>
                <TextField
                  id="outlined-basic"
                  label="Enter the name of the club"
                  variant="outlined"
                  value={clubName}
                  onChange={(e) => setClubName(e.target.value)}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* <label>Club manager name</label>
          <TextField
            id="outlined-basic"
            label="Enter the club manager's name"
            variant="outlined"
            value={managerName}
            onChange={(e) => setManagerName(e.target.value)}
          />
          <label>Club manager email</label>
          <TextField
            id="outlined-basic"
            label="Enter the club manager's email"
            variant="outlined"
            value={managerEmail}
            onChange={(e) => setManagerEmail(e.target.value)}
          /> */}
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
          >
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Admin;
