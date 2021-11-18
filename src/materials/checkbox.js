import React, { useState } from "react";
//import CheckBox from "@material-ui/core/Checkbox";
import { Checkbox } from "@material-ui/core";

const Check = () => {
  const [name, setName] = useState([]);

  function getValue(e) {
    let data = name;
    data.push(e.target.value);
    console.warn(data);
  }
  return (
    <div className="checkmate">
      <h1>React Material UI | CheckBox</h1>
      <Checkbox
        color="default"
        value="Shivam"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="Bhatia"
        onChange={(e) => {
          getValue(e);
        }}
      />
      <Checkbox
        color="default"
        value="Junior Software Engineer"
        indeterminate
        onChange={(e) => {
          getValue(e);
        }}
      />
    </div>
  );
};

export default Check;
