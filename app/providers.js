"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return <ThemeProvider defaultTheme="lemonade">{children}</ThemeProvider>;
};
export default Providers;
