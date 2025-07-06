import "./ThemeSwitch.css";
import { ThemeSwitchButton } from "../ThemeSwitchButton/ThemeSwitchButton";

export const ThemeSwitch = ({ buttons, onThemeSwitch, theme }) => {
  return (
    <div className="theme-switch">
      <div className="theme-switch__buttons">
        {buttons.map((button) => (
          <ThemeSwitchButton
            key={button.id}
            active={theme === button.value}
            value={button.value}
            onSwitch={onThemeSwitch}
          >
            {button.title}
          </ThemeSwitchButton>
        ))}
      </div>

      <div className="theme-switch__label">{theme}</div>
    </div>
  );
};
