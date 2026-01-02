import { Routes, Route } from "react-router";
import { routes } from "./routes";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App() {
  return (
    <>
      {/* Global header */}
      <Header />

      {/* Route-specific page content */}
      <main>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </main>

      {/* Global footer */}
      <Footer />
    </>
  );
}
