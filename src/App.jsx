import { useState } from "react";
import "./App.css";
import { ThemeSwitch } from "./components/ThemeSwitch/ThemeSwitch";
import themeButtons from "./config/theme-buttons.json";
import classNames from "classnames";

function App() {
  const [theme, setTheme] = useState("light");
  const onThemeSwitch = (theme) => {
    console.log(theme);
    setTheme(theme);
  };
  return (
    <div className={classNames(theme, "app")}>
      <ThemeSwitch
        buttons={themeButtons}
        theme={theme}
        onThemeSwitch={onThemeSwitch}
      />
    </div>
  );
}

export default App;
