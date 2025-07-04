import S from "./ThemeSwitchButton.module.css";

export const ThemeSwitchButton = ({ value, active, onSwitch, children }) => {
  const className = active ? `${S.container} ${S.active}` : S.container;

  return (
    <button onClick={() => onSwitch(value)} className={className}>
      {children}
    </button>
  );
};
