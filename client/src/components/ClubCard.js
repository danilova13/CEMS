import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import LeaveClubForm from './LeaveClubForm';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';
import { ButtonGroupProps } from '@mui/material';
import { Modal} from '@mui/material';
import Box from "@mui/material/Box";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ClubCard = styled((props: ExpandMoreProps) => {

	const { expand, ...other } = props;
  	return <IconButton {...other} />;
  
}) (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard( {club}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  
  }

  const [ showLeaveClubForm, setShowLeaveClubForm ] = useState(false);
  const displayLeaveClubForm = () => {
    setShowLeaveClubForm(true);
  }

  const hideLeaveClubForm = () => setShowLeaveClubForm(false);

  const { auth, setAuth } = useAuth();

  const onSubmit = (e) => {
		e.preventDefault();
		console.log('You successfully signed up for a club');

		fetch(`http://localhost:8080/users/${auth.id}/clubs/${club.idClub}`, {
			method: "PUT",
			headers: {"Content-Type": "application/json"}
		})
		.then((res) => {
			if(res.ok) {
				return res.json();
			}
			throw new Error('Failed to leave club');
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		})

  }

  return (
    <Card sx={{ maxWidth: 230, minHeight: 350}}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
    
		    titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={club.nameClub}
        subheader=""
      />

      <CardMedia
        component="img"
        height="194"
        image={require(`../images/${club.imageString.trim()}`)}
        alt="club_image"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Click below to learn more
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        */}
        <ExpandMore
          expand="false"
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>

          <Typography paragraph>
           {club.clubDescription}
          </Typography>
<<<<<<< Updated upstream

=======
        
          <CardActions>
            <Button
              className=""
              onClick={displayLeaveClubForm} 
              size="small" sx={{color: '#dd2c00', fontWeight: 'bold',buttonAlign: 'center'}}
            >Leave Club</Button>
          </CardActions>
        <Modal
          open={showLeaveClubForm}
          onClose={hideLeaveClubForm}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <LeaveClubForm onClose={hideLeaveClubForm} onSubmit={onSubmit} clubId={club.idClub}/>
          </Box>
        </Modal>
>>>>>>> Stashed changes
        </CardContent>
      </Collapse>
    </Card>
  );
	
}
 