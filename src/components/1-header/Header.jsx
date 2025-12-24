import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [showModel, setshowModel] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("curntTheme") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header id="head" className="flx">
      <button
        onClick={() => {
          setshowModel(true);
        }}
        className="icon-menu menu"
      ></button>

      <div />
      <nav>
        <ul className="flx">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/speaking">Speaking</Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "curntTheme",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("curntTheme"));
        }}
        className="mode flx"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
 
      {showModel && (
        <div className="fix">
          <ul className="modl">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModel(false);
                }}
              ></button>
            </li>
            <li>
              <Link to="/" onClick={() => setshowModel(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setshowModel(false)}>About</Link>
            </li>
            <li>
              <Link to="/article" onClick={() => setshowModel(false)}>Article</Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setshowModel(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/speaking" onClick={() => setshowModel(false)}>Speaking</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
