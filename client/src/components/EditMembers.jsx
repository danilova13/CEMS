import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditMembers = ({ membersModalHandleClick }) => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  
  const [member, setMember] = useState("");
  const [dbMembers, setDbMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/users/`)
      .then(res => res.json())
      .then(data => setDbMembers((prev) => data))
  }, [])

  useEffect(() => {
    const foundmember = dbMembers.find((dbmember) => dbmember.name == member);
    setSelectedMember((prev) => foundmember);
    console.log(222, selectedMember);
    return () => {};
  }, [member, setMember]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/members/${selectedMember.id}`, {
      method: "DELETE",
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

    membersModalHandleClick();
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <FormControl sx={{ m: 1, minWidth: 532 }}>
          <InputLabel id="member">Select a member to delete</InputLabel>
          <Select
            labelId="Select a member to delete"
            value={member}
            onChange={(e) => setMember(e.target.value)}
            label="Select a member to delete"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {dbMembers.map((member) => (
              <MenuItem key={member.name} value={member.name}>
                 {member.name}
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
            Delete
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditMembers;
