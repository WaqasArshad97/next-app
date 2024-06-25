import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { headerProps } from "@/types/types";

export default function Header({ handleDrawerToggle, navItems }: headerProps) {
  return (
    <AppBar sx={{ backgroundColor: "black" }} position="sticky" component="nav">
      <Toolbar
      sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"
      }}
      >
        <Typography
          variant="h6"
          component="div"
        >
          LOGO
        </Typography>
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "block"
            },
          }}
        >
          {navItems?.map((item) => (
            <Button
              key={item}
              sx={{
                color: "#fff",
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            "&:hover": {
              backgroundColor: "#fff",
            },
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          Login
        </Button>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: {
              sm: "none",
            },
          }}
        >
          <MenuIcon
            sx={{
              color: "#fff",
            }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
