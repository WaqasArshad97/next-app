import AuthLayout from "@/components/AuthLayout";
import CustomButton from "@/components/CustomButton";
import CustomTextField from "@/components/CustomTextField";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
});

const ForgetPassword: React.FC = () => {
  return (
    <AuthLayout>
      <Typography
        sx={{
          color: "#3AAFA9",
          textAlign: "center",
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
        Forgot Password
      </Typography>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            resetForm();
            toast.success("An email has been sent for reset password");
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
              sx={{ m: 1, width: "25ch" }}
            />
            <CustomButton type="submit" disabled={isSubmitting || !isValid}>
              Forget Password
            </CustomButton>
          </Form>
        )}
      </Formik>
      <Box display="flex" justifyContent="center" mt={2}>
        <Typography variant="body2">
          Remember your password?{" "}
          <Link
            href="/auth/signin"
            sx={{
              color: "#3AAFA9",
            }}
          >
            Sign In
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default ForgetPassword;