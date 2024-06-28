import React from 'react';
import AuthLayout from "@/components/AuthLayout";
import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
import { Box, Link, Typography } from "@mui/material";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirm_password: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

const Signup: React.FC = () => {
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
      <Typography
        sx={{
          color: "#3AAFA9",
        }}
        variant="h6"
        component="h3"
      >
        Create account
      </Typography>
      <Formik
        initialValues={{ email: '', password: '', confirm_password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            toast.success("User Created successfully")
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            }, 400);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field
              type="email"
              name="email"
              as={CustomTextField}
              label="Email"
              sx={{ m: 1, width: '25ch' }}
            />
            <Field
              type="password"
              name="password"
              as={CustomTextField}
              label="Password"
              sx={{ m: 1, width: '25ch' }}
            />
            <Field
              type="password"
              name="confirm_password"
              as={CustomTextField}
              label="Confirm Password"
              sx={{ m: 1, width: '25ch' }}
            />
            <CustomButton type="submit" disabled={isSubmitting || !isValid}>
              Sign up
            </CustomButton>
            <Box display="flex" justifyContent="center" mt={2}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link 
                  href="/auth/signin"
                  sx={{ color: "#3AAFA9" }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default Signup;