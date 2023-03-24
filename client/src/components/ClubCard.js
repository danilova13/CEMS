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

  };

  return (
    <Card sx={{ maxWidth: 230, minHeight: 350}}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: 10, fontWeight: 'bold'}} aria-label="clubs">
            CEMS
          </Avatar>
        }
    
		    titleTypographyProps={{variant:'h6', fontWeight: 'bold' }}
        title={club.clubName}
        subheader=""
      />

      <CardMedia
        component="img"
        height="194"
        image={require(`../images/${club.clubImage}`)}
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
        </CardContent>
      </Collapse>
    </Card>
  );
	
}
 