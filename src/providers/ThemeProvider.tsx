// ThemeProvider.tsx
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import {colorScheme} from "nativewind";
import React, {createContext, useContext, useEffect, useState} from "react";
import {Appearance, View} from "react-native";

type ThemeMode = "light" | "dark" | "system";
type ThemeContextType = {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: () => {},
});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("system");

  useEffect(() => {
    AsyncStorage.getItem("theme").then((saved) => {
      const mode = (saved as ThemeMode) ?? "system";
      setCurrentTheme(mode);
      colorScheme.set(mode); // ← this is the only thing NativeWind needs
    });
  }, []);

  const setTheme = async (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme); // ← NativeWind switches dark: variants here
    await AsyncStorage.setItem("theme", newTheme);
  };

  const systemPref = Appearance.getColorScheme() ?? "light";
  const resolvedTheme = currentTheme === "system" ? systemPref : currentTheme;

  return (
    <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
      <StatusBar style={resolvedTheme === "dark" ? "light" : "dark"} />
      {/* No style prop here — let NativeWind's colorScheme drive dark: variants */}
      <View className="flex-1 bg-background dark:bg-dark-background">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
