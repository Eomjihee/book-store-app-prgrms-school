// Type -----------------------------------------------------------
export type TThemeName = "light" | "dark";
export type TColorKey = "primary" | "secondary"  | "background" | "border" | "text";
export type THeadingSize = "large" | "medium" | "small";
export type TButtonSize = "large" | "medium" | "small";
export type TButtonScheme = "primary" | "normal";
// layout width : 가로너비 제한 및 가운데 정렬을 위해 정의
export type TLayoutWidth = "large" | "medium" | "small";

// Interface ------------------------------------------------------
interface ITheme {
  name: TThemeName;
  color: Record<TColorKey, string>;
  /* 위와 동일하게 사용 가능
    color: {
      [key in TColorKey]: string;
    }
  */
  heading: {
    [key in THeadingSize]: {
      fontSize: string;
    };
  };
  button: {
    [key in TButtonSize]: {
      fontSize: string;
      padding: string;
    };
  };
  buttonScheme: {
    [key in TButtonScheme]: {
      color: string;
      backgroundColor: string;
    };
  };
  borderRadius: {
    default: string;
  };
  layout: {
    width: {
      [key in TLayoutWidth]: string;
    }
  }
}

export const light: ITheme = {
  name: 'light',
  color: {
    primary: '#00804c',
    secondary: '#74c365',
    background: '#f6f7ed',
    border: '#00663d',
    text: '#001b10'
  },
  heading: {
    large: {
      fontSize: '2rem'
    },
    medium: {
      fontSize: '1.5rem'
    },
    small: {
      fontSize: '1rem'
    },
  },
  button: {
    large: {
      fontSize: '1.5rem',
      padding: '1rem 2rem'
    },
    medium: {
      fontSize: '1rem',
      padding: '0.5rem 1rem'
    },
    small: {
      fontSize: '0.75rem',
      padding: '0.25rem 0.5rem'
    },
  },
  buttonScheme: {
    primary: {
      color: '#f9f9f9',
      backgroundColor: '#297ba4'
    },
    normal: {
      color: '#176e76',
      backgroundColor: '#dce8d7'
    },
  },
  borderRadius: {
    default: '4px'
  },
  layout: {
    width: {
      large: '1024px',
      medium: '720px',
      small: '480px'
    }
  }
};
export const dark: ITheme = {
  ...light,
  name: 'dark',
  color: {
    primary: '#dbe64c',
    secondary: '#74c365',
    background: '#001f3f',
    border: '#6be752',
    text: '#9bb1ac'
  },
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