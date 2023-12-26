import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, IconButton, Checkbox } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MuiCard = (props) => {
  const { page } = props;
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => { setChecked(event.target.checked) };

  return (
    <>
      <Card style={{ margin: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <CardContent style={{ display: 'flex', alignItems: 'center' }}>
          {page.includes("home") ? (
            <Checkbox checked={checked} onChange={handleChange} style={{ paddingLeft: "0px" }} />
          ) : null}
          <Typography style={{ marginLeft: '8px', textTransform: 'uppercase' }}>
            <div>React-to-doApp</div>
            <div>10:30AM, 26/12/2023</div>
          </Typography>
        </CardContent>
        {page.includes("home") ? (
          <CardActions>
            <IconButton aria-label="edit" onClick={() => onEdit()}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={() => onDelete()}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        ) : (
          null
        )}
        {page.includes("completed") ? (
          <CardActions>

            <IconButton aria-label="delete" onClick={() => onDelete()}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        ) : (null)}

      </Card>
    </>
  );
}

export default MuiCard;

