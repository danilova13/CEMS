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
import Image from '../images/chessclub.png'

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

//the code for the card 
  return (
    <Card sx={{ maxWidth: 220}}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
		titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title="Chess Club"
        subheader=""
      />

      <CardMedia
        component="img"
        height="194"
        image={Image}
        alt="club_image"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Chessclub Description 
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
       
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
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
           Club's activities
          </Typography>
          <Typography paragraph>
           Paragraph 1
          </Typography>
          <Typography paragraph>
			Paragraph 2
          </Typography>
          <Typography>
            Message
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
	
}
 