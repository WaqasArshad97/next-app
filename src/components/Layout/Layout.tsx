"use client";

import React, { useState } from "react";
import Header from "./Header/Header";
import { Box } from "@mui/material";
import { children } from "@/types/types";
import TemporaryDrawer from "./Drawer/Drawer";

const Layout = ({ children }: children) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navItems = ["Home", "About", "Contact"];

  const handleDrawerToggle = () => {
    setOpenDrawer((prev) => !prev);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} navItems={navItems} />
      <TemporaryDrawer
        drawerOpen={openDrawer}
        handleDrawerToggle={handleDrawerToggle}
        navItems={navItems}
      />
      <Box
      sx={{
        mx: "8px"
      }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
