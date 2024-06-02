// Type -----------------------------------------------------------
export type TThemeName = "light" | "dark";
type TColorKey = "primary" | "secondary"  | "background";

// Interface ------------------------------------------------------
interface ITheme {
  name: TThemeName;
  color: Record<TColorKey, string>;
  /* 위와 동일하게 사용 가능
    color: {
      [key in TColorKey]: string;
    }
  */
}

export const light: ITheme = {
  name: 'light',
  color: {
    primary: '#00804c',
    secondary: '#74c365',
    background: '#f6f7ed',
  }
};
export const dark: ITheme = {
  name: 'dark',
  color: {
    primary: '#dbe64c',
    secondary: '#74c365',
    background: '#001f3f',
  }
}

export const getTheme = (themeName: TThemeName): ITheme => {
  switch (themeName) {
    case "dark":
      return dark;
    case "light":
    default:
      return light;
  }
}