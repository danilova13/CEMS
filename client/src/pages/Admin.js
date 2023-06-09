import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AdminPanelSettings } from "@mui/icons-material";
import CreateClub from "../components/CreateClub";
import Modal from "@mui/material/Modal";
import PromoteMember from "../components/PromoteMember";

const Admin = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [showClub, setShowClub] = useState(false);
  const [showMember, setShowMember] = useState(false);

  const clubModalHandleClick = () => {
    setShowClub(prev => !prev)
  }

  const memberModalHandleClick = () => {
    setShowMember(prev => !prev)
  }

  return (
    <div>
      <div className="flex justify-around w-42 h-150 mt-24">
      <Button className="!bg-[#FC9F26] !font-bold" onClick={clubModalHandleClick} variant="contained" size="large" >Create club</Button>
      <Button className="!bg-[#FC9F26] !font-bold" onClick={memberModalHandleClick} variant="contained" size="large">Promote club members</Button>
      </div>
      <Modal
        open={showClub}
        onClose={clubModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <CreateClub clubModalHandleClick={clubModalHandleClick}></CreateClub>
        </Box>
      </Modal>
      <Modal
        open={showMember}
        onClose={memberModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
         <PromoteMember memberModalHandleClick={memberModalHandleClick}></PromoteMember>
        </Box>
      </Modal>
    </div>
  );
};

export default Admin;
