import React, { useState } from "react";
import { Toolbar, Box } from "@mui/material";
import Header from "./Header/Header";
import ResponsiveDrawer from "./Drawer/Drawer";
import { LayoutProps } from "@/types/types";
import Footer from "./Footer/Footer";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Header handleDrawerToggle={handleDrawerToggle} />
        <ResponsiveDrawer
          drawerOpen={openDrawer}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
