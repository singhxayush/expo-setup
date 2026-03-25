import {useThemeColors} from "@/lib/theme";
import {Stack} from "expo-router";

export default function HomeLayout() {
  const colors = useThemeColors();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          paddingTop: 24,
          backgroundColor: colors.background, // ← fills the gap with your color
        },
      }}
    />
  );
}
