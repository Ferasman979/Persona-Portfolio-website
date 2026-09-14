"use client";

import { useSyncExternalStore } from "react";
import styles from "./ThemeToggle.module.css";

const THEME_EVENT = "themechange";

function subscribe(callback: () => void) {
    window.addEventListener(THEME_EVENT, callback);
    window.addEventListener("storage", callback);
    return () => {
        window.removeEventListener(THEME_EVENT, callback);
        window.removeEventListener("storage", callback);
    };
}

function getTheme(): "dark" | "light" {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerTheme(): "dark" | "light" {
    return "dark";
}

const ThemeToggle = () => {
    const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
    const isLight = theme === "light";

    const toggleTheme = () => {
        const next = isLight ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        try {
            localStorage.setItem("theme", next);
        } catch {
            // Ignore storage failures in private browsing.
        }
        window.dispatchEvent(new Event(THEME_EVENT));
    };

    return (
        <button
            type="button"
            className={styles.toggle}
            onClick={toggleTheme}
            aria-pressed={isLight}
            aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
        >
            {isLight ? "Dark" : "Light"}
        </button>
    );
};

export default ThemeToggle;
