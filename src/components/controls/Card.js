import {Box, Card,CardContent,Typography,CardActions,Button, Checkbox  } from '@mui/material';
import React,{useState} from 'react';

const MuiCard=()=>{
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana" onChange={handleChange1}
        /> */}
        <CardActions>
        <Checkbox
      checked={checked}
      onChange={handleChange}
    />
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
}

export default MuiCard;