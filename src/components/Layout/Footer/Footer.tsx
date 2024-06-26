import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Facebook, X, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={6} bgcolor="#DEF2F1">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box 
            component="div"
            sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "16px",
            }}
            >
              <Typography variant="h6">LOGO</Typography>
            </Box>
            <Typography variant="body2">
              A short description of what you do here
            </Typography>
            <Typography variant="body2" color="textSecondary" mt={2}>
              &copy; 2021 Company
            </Typography>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Terms
            </Link>{" "}
            |{" "}
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Privacy
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">PRODUCT</Typography>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Pricing
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" variant="body2">
              FAQ
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">COMPANY</Typography>
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Inbox
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover" variant="body2">
              Archived
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">SOCIAL</Typography>
            <Box
            sx={{
                display: "flex",
                gap: "16px",
            }}
            >
              <Link href="#" color="#000">
                <X />
              </Link>
              <Link href="#" color="#0e8bf1">
                <Facebook />
              </Link>
              <Link href="#" color="#e71111">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
