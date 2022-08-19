import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "",
  changeTheme: () => {},
});

export const MediaQueryContext = createContext({
  mobile: () => {},
  sTablet: () => {},
  mTablet: () => {},
  sDesktop: () => {},
  mDesktop: () => {},
  lDesktop: () => {},
});