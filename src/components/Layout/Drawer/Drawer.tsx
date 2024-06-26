import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Toolbar } from "@mui/material";
import { Archive, Home } from "@mui/icons-material";
import { DrawerProps } from "@/types/types";

const drawerWidth = 240;

const ResponsiveDrawer: React.FC<DrawerProps> = ({
  drawerOpen,
  handleDrawerToggle,
}) => {
  const navItems = [
    {
      text: "Home",
      icon: <Home />,
    },
    {
      text: "Inbox",
      icon: <InboxIcon />,
    },
    {
      text: "Archived",
      icon: <Archive />,
    },
  ];

  const content = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {navItems?.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon
              sx={{
                color: "#3AAFA9" 
              }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          zIndex: -1,
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {content}
      </Drawer>

      <Drawer
        open={drawerOpen}
        onClick={handleDrawerToggle}
        variant="temporary"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {content}
      </Drawer>
    </>
  );
};

export default ResponsiveDrawer;
