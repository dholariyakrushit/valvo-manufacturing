import React, { createContext, useState } from 'react';

 export const ThemeContext=createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
      };
  return (
    <ThemeContext value={{theme,setTheme,toggleTheme}}>{children}</ThemeContext>
  )
}

export default ThemeProvider