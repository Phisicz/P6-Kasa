import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./ToggleButton.scss";

export const ToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={`toggleContainer ${theme === 'dark' ? 'isActive' : ''}`}
            onClick={toggleTheme}
        >
            <ToggleKnob isOn={theme === 'dark'} />
        </button>
    );
};

export const ToggleKnob = ({ isOn }) => (
    <span className={`toggleKnob ${isOn ? "isActive" : ""}`} />
);
