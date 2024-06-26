import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "@/types/types";

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle }) => {
  return (
    <AppBar sx={{ background: "#3AAFA9" }} position="fixed">
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box
        sx={{
          display: "flex",
          alignItems: "center"
        }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#DEF2F1",
            color: "black",
            "&:hover": {
              backgroundColor: "#DEF2F1",
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
