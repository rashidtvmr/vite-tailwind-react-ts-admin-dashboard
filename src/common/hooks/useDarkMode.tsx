import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === "dark");

    useEffect(() => {
        // Update localStorage and apply CSS class when the dark mode preference changes
        if (isDarkMode) {
            localStorage.setItem('theme', 'dark');
            document.body.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return [
        isDarkMode,
        toggleDarkMode,
    ];
};

export default useDarkMode;
