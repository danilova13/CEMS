import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const PromoteMember = ({ memberModalHandleClick }) => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(name, member, theme) {
    return {
      fontWeight:
        member.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const[dbMembers, setDbMembers] = useState([]);
  const[dbClubs, setDbClubs] = useState([]);

React.useEffect(() => {
  fetch("http://localhost:8080/users/", { //review this line
      method: "GET",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("invalid input");
      })
      .then((data) => {
        setDbMembers(prev => data)
      })
      .catch((err) => {
        console.log(err);
      });

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
        setDbClubs(prev => data)
      })
      .catch((err) => {
        console.log(err);
      });

  return () => {

  }
}, [])


  const defaultValues = { club: [], member: [] };
  const [values, setValues] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(111, JSON.stringify(values));

    //Add correct endpoint below
    fetch("http://localhost:8080/users/promote", {//review this line
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
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

    memberModalHandleClick();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

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
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="clubs">Clubs</InputLabel>
            <Select
              labelId="clubs"
              id="clubs"
              multiple
              name="club"
              value={values.club}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Clubs" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {dbClubs.map((club) => (
                <MenuItem
                  key={club.nameClub}
                  value={club.nameClub}
                  style={getStyles(club.nameClub, values.member, theme)}
                >
                  {club.nameClub}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="members">Members</InputLabel>
            <Select
              labelId="members"
              id="members"
              multiple
              name="member"
              value={values.member}
              onChange={handleChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="members" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {dbMembers.map((member) => (
                <MenuItem
                  key={member.first_Name}
                  value={`${member.first_Name} ${member.last_Name}`}
                  style={getStyles(member, values.member, theme)}
                >
                  {`${member.first_Name} ${member.last_Name}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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

export default PromoteMember;
