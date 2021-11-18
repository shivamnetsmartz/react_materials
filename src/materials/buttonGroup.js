import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const buttonGroup = () => {
  return (
    <div className="buttonGroup">
      <h1>React Material UI | ButtonGroup</h1>
      <ButtonGroup color="primary" variant="outlined" orientation="vertical">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default buttonGroup;
