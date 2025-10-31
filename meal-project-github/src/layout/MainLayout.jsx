import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { themeContext } from "../contexts/ThemeContext";
import Loading from "../components/Loading";

export default function Layout() {
  const { theme } = useContext(themeContext);
  const [loading, setLoading] = useState(false);

  return (
    <div
      data-bs-theme={theme}
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flex: "1" }}>
        <Outlet />
        {loading && <Loading />}
      </main>
      <Footer />
    </div>
  );
}
