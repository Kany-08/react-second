import { useState } from "react";
import "./ThemeSwitch.css";

export const ThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const onThemeSwitch = (theme) => {
    console.log(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="theme-switch">
      <div className="theme-switch__buttons">
        <button
          onClick={() => onThemeSwitch("dark")}
          className={
            currentTheme === "dark"
              ? "theme-switch__button theme-switch__button_active"
              : "theme-switch__buttton"
          }
        >
          🌑Dark
        </button>
        <button
          onClick={() => onThemeSwitch("light")}
          className={
            currentTheme === "light"
              ? "theme-switch__button theme-switch__button_active"
              : "theme-switch__buttton"
          }
        >
          ☀️Light
        </button>
      </div>

      <div className="theme-switch__label">{currentTheme}</div>
    </div>
  );
};
