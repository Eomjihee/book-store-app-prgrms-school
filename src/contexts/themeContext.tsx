import { createContext, useEffect, useState } from "react";
import { TThemeName, getTheme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";

const DEFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface IThemeState {
  themeName: TThemeName;
  toggleThemeName: () => void;
}

export const themeState: IThemeState = {
  themeName: DEFAULT_THEME_NAME,
  toggleThemeName: () => {},
};

export const ThemeContext = createContext<IThemeState>(themeState);
export const BookStoreThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<TThemeName>("light");
  const toggleThemeName = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, themeName === "light" ? "dark" : "light");
  };

  // local storage 초기값 받아보고 있다면 setThemeName, 없다면 DEFAULT_THEME_NAME을 받도록 설정
  useEffect(() => {
    const savedThemeName = localStorage.getItem( THEME_LOCALSTORAGE_KEY ) as TThemeName;
    setThemeName(savedThemeName || DEFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <GlobalStyle themeName={themeName} />
      <ThemeContext.Provider value={{ themeName, toggleThemeName }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
