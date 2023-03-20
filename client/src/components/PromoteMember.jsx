import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const PromoteMember = () => {
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
  
  const members = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const clubs = ["Cosc", "Chess", "Music", "Math"];
  
  function getStyles(name, member, theme) {
    return {
      fontWeight:
        member.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const theme = useTheme();
  const [club, setClub] = useState([]);
  const [member, setMember] = useState([]);
  // const defaultValues = {
  //   clubs: "",
  //   members: "",
  // };

  // const [values, setValues] = useState(defaultValues);

  const handleClubChange = (event) => {
    const {name,value} = event.target;

    // setValues({
    //   ...values,
    //   [name]: value,
    // });

      setClub(value);
  };

  const handleMemberChange = (event) => {
    const {name,value} = event.target;

    // setValues({
    //   ...values,
    //   [name]: value,
    // });

    if (name === "members")
      setMember(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "40ch" } }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="clubs">Clubs</InputLabel>
        <Select
          labelId="clubs"
          id="clubs"
          multiple
          name="clubs"
          value={club}
          onChange={handleClubChange}
          input={<OutlinedInput id="select-multiple-chip" label="Clubs" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {clubs.map((club) => (
            <MenuItem
              key={club}
              value={club}
              style={getStyles(club, member, theme)}
            >
              {club}
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
          name="members"
          value={member}
          onChange={handleMemberChange}
          input={<OutlinedInput id="select-multiple-chip" label="members" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {members.map((member) => (
            <MenuItem
              key={member}
              value={member}
              style={getStyles(member, member, theme)}
            >
              {member}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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

export default PromoteMember;
