import AuthLayout from "@/components/AuthLayout";
import CustomTextField from "@/components/CustomTextField";
import { Box, Button, Link, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import React from "react";
import CustomButton from "@/components/CustomButton";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username or email is required'),
  password: Yup.string().required('Password is required'),
});

const Signin: React.FC = () => {
  return (
    <AuthLayout>
      <Typography
        sx={{
          color: "#3AAFA9",
          textAlign: "center"
        }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Mastery Hub
      </Typography>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm;
            toast.success("Logged in successfully")
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              type="text"
              name="username"
              as={CustomTextField}
              label="Username or email"
              sx={{ m: 1, width: '25ch' }}
            />
            <Field
              type="password"
              name="password"
              as={CustomTextField}
              label="Password"
              sx={{ m: 1, width: '25ch' }}
            />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={2}
              mb={2}
            >
              <Link
                href="/auth/forget_password"
                variant="body2"
                sx={{
                  color: "#3AAFA9",
                }}
              >
                Forgot password?
              </Link>
            </Box>
            <CustomButton type="submit" disabled={isSubmitting || !isValid}>
              Sign in
            </CustomButton>
            <Box display="flex" alignItems="center" mt={2} mb={2}>
              <hr style={{ width: "100%" }} />
              <Typography variant="body1" component="span" mx={2}>
                or
              </Typography>
              <hr style={{ width: "100%" }} />
            </Box>
            <Button
              fullWidth
              size="large"
              startIcon={<GoogleIcon />}
              sx={{
                color: "#3AAFA9",
                background: "transparent"
              }}
            >
              Sign in with Google
            </Button>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Typography variant="body2">
                Are you new?{" "}
                <Link
                  href="/auth/signup"
                  sx={{
                    color: "#3AAFA9",
                  }}
                >
                  Create an Account
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Signin;
