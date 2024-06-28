import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "@/types/types";

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle }) => {
  return (
    <AppBar
    sx={{ 
      background: "#3AAFA9", 
      border: "none",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)"
    }} 
    position="fixed"
    >
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

        <Link
          component={Button}
          href={'/auth/signin'}
          sx={{
            paddingX: "18px",
            textDecoration: "none",
            backgroundColor: "#DEF2F1",
            color: "black",
            "&:hover": {
              backgroundColor: "#DEF2F1",
            },
          }}
        >
          Login
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
