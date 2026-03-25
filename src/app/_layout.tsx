// src/app/_layout.tsx
import {useNavThemeColors, useThemeColors} from "@/lib/theme";
import {ThemeProvider} from "@/providers/ThemeProvider";
import {ThemeProvider as NavThemeProvider} from "@react-navigation/native";
import {PortalHost} from "@rn-primitives/portal";
import {Stack} from "expo-router";
import {KeyboardProvider} from "react-native-keyboard-controller";
import "../../global.css";

// Inner component so we can call useUniwind() inside ThemeProvider
function RootLayoutNav() {
  const navTheme = useNavThemeColors();
  const colors = useThemeColors();

  return (
    <NavThemeProvider value={navTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            paddingTop: 24,
            backgroundColor: colors.background, // ← fills the gap with your color
          },
        }}
      />
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
