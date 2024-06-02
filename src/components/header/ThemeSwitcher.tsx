import { useContext } from "react";
import { TThemeName } from "../../styles/theme";
import { ThemeContext } from "../../contexts/themeContext";

// interface IThemeSwitcherProps {
//   themeName: TThemeName;
//   setThemeName: (themeName: TThemeName) => void;
// }

// const ThemeSwitcher = ({ themeName, setThemeName }: IThemeSwitcherProps) => {
  
//   // handler
//   const toggleTheme = () => {
//     setThemeName(themeName === 'light' ? 'dark' : 'light');
//   }
  
//   return (
//     <button onClick={toggleTheme}>
//       {themeName}
//     </button>
//   );
// };

// ThemeContext에서 내려주는 상태에 의존하도록 코드 변경
const ThemeSwitcher = () => {
  const { themeName, toggleThemeName} = useContext(ThemeContext);
  return (
    <button onClick={toggleThemeName}>
      {themeName}
    </button>
  );
}

export default ThemeSwitcher;
