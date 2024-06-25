import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { drawerProps } from "@/types/types";
import { Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: "250px",
    },
    logo: {
      padding: "16px",
      textAlign: "center",
    },
    list: {
      padding: "0px",
    },
    list_item: {
      padding: "0px",
    },
    list_button: {
      padding: "0px 16px",
    },
  })
);

export default function TemporaryDrawer({
  drawerOpen,
  handleDrawerToggle,
  navItems,
}: drawerProps) {
  const classes = useStyles();
  return (
    <Box>
      <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          className={classes.drawer}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <Typography variant="h6" component="div" className={classes.logo}>
            LOGO
          </Typography>
          <List className={classes.list}>
            {navItems?.map((text) => (
              <ListItem key={text} className={classes.list_item}>
                <ListItemButton className={classes.list_button}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
