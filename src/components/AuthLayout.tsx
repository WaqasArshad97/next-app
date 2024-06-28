import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import Image from "next/image";
import { waiting_illustration } from "@/assets";
import { LayoutProps } from "@/types/types";

const AuthLayout : React.FC<LayoutProps> = ({children}) => {

  return (
    <Container maxWidth="lg" disableGutters>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#e0f7fa",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
            }}
          >
            <Image
              src={waiting_illustration}
              alt="Exam Mastery Hub"
              width={300}
              height={300}
            />
            <Typography
              sx={{
                color: "#3AAFA9",
              }}
              variant="h4"
              component="h1"
              gutterBottom
            >
              Mastery Hub
            </Typography>
            <Typography variant="subtitle1" align="center">
              Join to explore the world with us
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "#fff",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "32px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "400px",
              }}
            >
              {children}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AuthLayout;