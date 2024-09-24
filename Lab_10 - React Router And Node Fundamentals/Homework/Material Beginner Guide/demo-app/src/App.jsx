import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material-UI Demo</Typography>
        </Toolbar>
      </AppBar>
      <TextField label="Enter Text" variant="outlined" />
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}

export default App;
