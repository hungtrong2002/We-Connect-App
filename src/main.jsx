import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import ModalProvider from "@components/Context/ModalProvider";
import { lazy } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./configs/muiConfig.js";
import RegisterPage from "@pages/Auth/RegisterPage";
import AuthLayout from "@pages/Auth/AuthLayout";
import LoginPage from "@pages/Auth/LoginPage";
import OTPVerifyPage from "@pages/Auth/OTPVerifyPage";
const HomePage = lazy(() => import("@pages/HomePage"));

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/register",
            element: <RegisterPage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            path: "/verify-otp",
            element: <OTPVerifyPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  </ThemeProvider>,
);
