import Home from "../pages/Home/Home";

// Centralized route configuration for the application
export const routes = [
  { path: "/", element: <Home /> },
  // Fallback route for undefined paths (enable when NotFound page is added)
  // { path: "*", element: <NotFound /> },
];
