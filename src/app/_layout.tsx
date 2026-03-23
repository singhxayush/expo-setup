// src/app/_layout.tsx
import {NAV_THEME} from "@/lib/theme";
import {ThemeProvider} from "@/providers/ThemeProvider";
import {ThemeProvider as NavThemeProvider} from "@react-navigation/native";
import {PortalHost} from "@rn-primitives/portal";
import {Stack} from "expo-router";
import {KeyboardProvider} from "react-native-keyboard-controller";
import {useUniwind} from "uniwind";
import "../../global.css";

// Inner component so we can call useUniwind() inside ThemeProvider
function RootLayoutNav() {
  const {theme} = useUniwind();

  return (
    <NavThemeProvider value={NAV_THEME[theme as "light" | "dark"]}>
      <Stack screenOptions={{headerShown: false}} />
      <PortalHost />
    </NavThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <KeyboardProvider>
      <ThemeProvider>
        <RootLayoutNav />
      </ThemeProvider>
    </KeyboardProvider>
  );
}
