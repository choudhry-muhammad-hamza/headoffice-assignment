import "./Header.css";
import logo from "../../assets/logo/logo.jpg";
import { useState } from "react";

export const Header = ({ setSearch }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-dark"
        style={{ backgroundColor: darkMode ? "#222" : "#343a40" }}
      >
        <div className="container-fluid">
          <img src={logo} alt="Brand Logo" className="logo" />

          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          <button
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
            onClick={toggleMode}
            style={{ marginLeft: "10px" }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
};
