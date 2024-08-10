"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider defaultTheme="acid">{children}</ThemeProvider>;
};
export default Providers;
