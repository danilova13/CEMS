import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CreateEvent from "../components/CreateEvent";
import EditClub from "../components/EditClub";

const Manager = () => {
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

  const [showEvent, setShowEvent] = useState(false);
  const [showClub, setShowClub] = useState(false);

  const clubModalHandleClick = () => {
		setShowClub(prev => !prev)
	}
	
  const eventModalHandleClick = () => {
		setShowEvent(prev => !prev)
  }

  return (
    <div>
      <div className="flex justify-around w-42 h-150 mt-24">
      <Button className="!bg-[#FC9F26] !font-bold" onClick={clubModalHandleClick} variant="contained" size="large" >Edit club</Button>
      <Button className="!bg-[#FC9F26] !font-bold" onClick={eventModalHandleClick} variant="contained" size="large">Create Event</Button>
      </div>
      <Modal
        open={showClub}
        onClose={clubModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
					<EditClub clubModalHandleClick={clubModalHandleClick}></EditClub>
        </Box>
      </Modal>
      <Modal
        open={showEvent}
        onClose={eventModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
					<CreateEvent eventModalHandleClick={eventModalHandleClick}></CreateEvent>
        </Box>
      </Modal>
    </div>
  );
};

export default Manager;
