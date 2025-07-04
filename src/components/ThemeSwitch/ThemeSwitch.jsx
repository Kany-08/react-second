import { useState } from "react";
import "./ThemeSwitch.css";
import { ThemeSwitchButton } from "../ThemeSwitchButton/ThemeSwitchButton";

export const ThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const onThemeSwitch = (theme) => {
    console.log(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="theme-switch">
      <div className="theme-switch__buttons">
        <ThemeSwitchButton
          active={currentTheme === "dark"}
          value="dark"
          onSwitch={onThemeSwitch}
        >
          🌑Dark
        </ThemeSwitchButton>
        <ThemeSwitchButton
          active={currentTheme === "light"}
          value="light"
          onSwitch={onThemeSwitch}
        >
          ☀️Light
        </ThemeSwitchButton>
      </div>

      <div className="theme-switch__label">{currentTheme}</div>
    </div>
  );
};
