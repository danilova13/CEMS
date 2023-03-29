import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Reports = () => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };

  const [club, setClub] = useState("");
  const [selectedClub, setSelectedClub] = useState({});
  const [dbClubs, setDbClubs] = useState([]);
  const [report, setReport] = useState({});
  const [showReport, setShowReport] = useState(false);
  let submitCount = 0;

  useEffect(() => {
    fetch(`http://localhost:8080/clubs/`)
      .then((res) => res.json())
      .then((data) => setDbClubs((prev) => data));
  }, []);

  useEffect(() => {
    const foundClub = dbClubs.find((dbClub) => dbClub.nameClub == club);
    setSelectedClub((prev) => foundClub);
    return () => {};
  }, [club, setClub]);


  // useEffect(() => {

  //   fetch(`http://localhost:8080/clubs/${selectedClub?.idClub}/financials`)
  //     .then((res) => res.json())
  //     // .then(data => setReport(prev => data))
  //     .then((data) => console.log(333, data));
  // }, [selectedClub, setSelectedClub]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(111, selectedClub)

    if(submitCount == 0) {
      fetch(`http://localhost:8080/clubs/${selectedClub?.idClub}/financials`, {
        method: "GET",
      })
      .then((res) => res.json())
      .then(data => setReport(prev => data))
    }
    submitCount ++;
    setShowReport((prev) => true);
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <FormControl sx={{ m: 1, minWidth: 532 }}>
          <InputLabel id="member">Select a club to generate report</InputLabel>
          <Select
            labelId="Select a club to generate report"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            label="Select a club to generate report"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dbClubs.map((club) => (
              <MenuItem key={club.nameClub} value={club.nameClub}>
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
          <br />
          {showReport && (
            <div>
              <p>{report.financeReport}</p>
            </div>
          )}
          <Button
            style={{
              maxWidth: "100px",
              maxHeight: "40px",
              backgroundColor: "#FC9F26",
              color: "#fffff",
              fontWeight: "bold",
              fontSize: "12px",
            }}
            variant="contained"
            type="submit"
          >
            Generate
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Reports;
