import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Anima from "./components/Animals";
import Country from "./components/Country";
import Birds from "./components/Birds";

function App() {
  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ fontWeight: "bolder",textShadow:"5px 5px 5px"}} variant="h6">
            Hangman
          </Typography>
          <Box display="flex">
            <Button
              style={{ border: "2px solid white", padding: "3px" }}
              variant="contained"
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "bolder",
                  color: "white",
                }}
                to="/country"
              >
                Country
              </Link>
            </Button>
            <Button
              style={{ border: "2px solid white", padding: "3px" }}
              variant="contained"
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "bolder",
                  color: "white",
                }}
                to="/birds"
              >
                Birds
              </Link>
            </Button>
            <Button
              style={{ border: "2px solid white", padding: "3px" }}
              variant="contained"
            >
              <Link
                style={{
                  textDecoration: "none",
                  fontWeight: "bolder",
                  color: "white",
                }}
                to="/"
              >
                Animals
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route exact path="/" element={<Anima />} />
        <Route exact path="/birds" element={<Birds />} />
        <Route exact path="/country" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
