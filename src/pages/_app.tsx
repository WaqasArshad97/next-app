import Layout from "@/components/Layout/Layout";
import { AppContextProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import type { AppProps } from "next/app";
import useShouldWrapWithLayout from "@/helpers/useShouldWrapWithLayout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  const shouldWrapWithLayout = useShouldWrapWithLayout();
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        {shouldWrapWithLayout ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </AppContextProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          style: {
            background: "#3AAFA9",
            color: "#fff",
          },
        }}
      />
    </ThemeProvider>
  );
}
