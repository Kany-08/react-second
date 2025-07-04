import { useState } from "react";
import "./ThemeSwitch.css";
import { ThemeSwitchButton } from "../ThemeSwitchButton/ThemeSwitchButton";
import buttons from "./buttons.json";

export const ThemeSwitch = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  const onThemeSwitch = (theme) => {
    console.log(theme);
    setCurrentTheme(theme);
  };

  return (
    <div className="theme-switch">
      <div className="theme-switch__buttons">
        {buttons.map((button) => {
          <ThemeSwitchButton
            key={button.id}
            active={currentTheme === button.value}
            value={button.value}
            onSwitch={onThemeSwitch}
          >
            {button.title}
          </ThemeSwitchButton>;
        })}
      </div>

      <div className="theme-switch__label">{currentTheme}</div>
    </div>
  );
};
