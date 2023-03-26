import * as React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CreateEvent from "../components/CreateEvent";
import EditClub from "../components/EditClub";
import Reports from "../components/Reports";
import Requests from "../components/Requests";

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
  const [showRequests, setShowRequests] = useState(false);
  const [showReports, setShowReports] = useState(false);

  const clubModalHandleClick = () => {
		setShowClub(prev => !prev)
	}
	
  const eventModalHandleClick = () => {
		setShowEvent(prev => !prev)
  }

  const requestsModalHandleClick = () => {
		setShowRequests(prev => !prev)
  }

  const reportsModalHandleClick = () => {
		setShowReports(prev => !prev)
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-10 gap-y-10 w-42 h-150 mt-24">
      <Button className="!bg-[#FC9F26] !font-bold !m-20" onClick={clubModalHandleClick} variant="contained" size="large" >Edit clubs</Button>
      <Button className="!bg-[#FC9F26] !font-bold !m-20" onClick={eventModalHandleClick} variant="contained" size="large">Create Events</Button>
      <Button className="!bg-[#FC9F26] !font-bold !m-20" onClick={requestsModalHandleClick} variant="contained" size="large">Pending requests</Button>
      <Button className="!bg-[#FC9F26] !font-bold !m-20" onClick={reportsModalHandleClick} variant="contained" size="large">Financial reports</Button>
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
      <Modal
        open={showRequests}
        onClose={requestsModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
					<Requests requestsModalHandleClick={requestsModalHandleClick}></Requests>
        </Box>
      </Modal>
      <Modal
        open={showReports}
        onClose={reportsModalHandleClick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
					<Reports reportsModalHandleClick={reportsModalHandleClick}></Reports>
        </Box>
      </Modal>
    </div>
  );
};

export default Manager;
