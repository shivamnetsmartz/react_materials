import React, { useState } from "react";
// import Button from "@mui//Button";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import SendIcon from "@mui/icons-material/Send";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";

// import AlarmIcon from "@mui/icons-material/Alarm";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function ButtonTask() {
  //states
  const [color, setColor] = useState("primary");
  const [disableButton, setDisableButton] = useState(false);

  function HelloWorld() {
    setColor("secondary");
    //setDisableButton(true);
    //alert("HelloWorld Called");
  }

  return (
    <>
      <div className="App">
        <h1>REACT_MUI</h1>
        <Button
          color={color}
          variant="outlined"
          onClick={HelloWorld}
          disabled={disableButton}
          size="large"
          endIcon={<DeleteIcon />}
        >
          Click Me!
        </Button>
        {/* <Button color="primary">Material UI Button</Button>
        <br />
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="outlined" className="mr-3" startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Stack direction="row" spacing={1}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="add an alarm">
            <AlarmIcon />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
        </Stack> */}
      </div>
    </>
  );
}

export default ButtonTask;
