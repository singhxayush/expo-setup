import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import React, {createContext, useContext, useEffect, useState} from "react";
import {View} from "react-native";
import {Uniwind, useUniwind} from "uniwind";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

// Inner component so we can use the useUniwind hook
const ThemeProviderInner = ({children}: {children: React.ReactNode}) => {
  const {theme, hasAdaptiveThemes} = useUniwind();

  // Resolve the actual light/dark for StatusBar
  // hasAdaptiveThemes = true means system mode is active
  const activeTheme = hasAdaptiveThemes ? "system" : theme;
  const resolvedTheme = activeTheme === "system" ? theme : activeTheme;

  return (
    <>
      <StatusBar style={resolvedTheme === "dark" ? "light" : "dark"} />
      {/* bg-background already resolves to light/dark value via CSS vars */}
      <View className="flex-1 bg-background">{children}</View>
    </>
  );
};

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("system");

  // Load persisted theme on mount
  useEffect(() => {
    AsyncStorage.getItem("theme").then((saved) => {
      const mode = (saved as ThemeMode) ?? "system";
      setCurrentTheme(mode);
      Uniwind.setTheme(mode);
    });
  }, []);

  const setTheme = async (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    Uniwind.setTheme(newTheme);
    await AsyncStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
      <ThemeProviderInner>{children}</ThemeProviderInner>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
