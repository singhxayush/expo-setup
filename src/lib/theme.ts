import {DarkTheme, DefaultTheme, type Theme} from "@react-navigation/native";
import {useUniwind} from "uniwind";

const THEME = {
  light: {
    background: "hsl(42.3529 27.8689% 88.0392%)",
    foreground: "hsl(0 0% 11.7647%)",
    card: "hsl(41.2500 42.1053% 92.5490%)",
    cardForeground: "hsl(0 0% 11.7647%)",
    popover: "hsl(41.2500 42.1053% 92.5490%)",
    popoverForeground: "hsl(0 0% 11.7647%)",
    primary: "hsl(0 0% 18.0392%)",
    primaryForeground: "hsl(52.0000 23.0769% 87.2549%)",
    secondary: "hsl(42.0000 20.4082% 80.7843%)",
    secondaryForeground: "hsl(0 0% 18.0392%)",
    muted: "hsl(41.7391 19.3277% 76.6667%)",
    mutedForeground: "hsl(40 6.8182% 34.5098%)",
    accent: "hsl(52.0000 23.0769% 87.2549%)",
    accentForeground: "hsl(0 0% 18.0392%)",
    destructive: "hsl(0 72.2222% 50.5882%)",
    destructiveForeground: "hsl(0 0% 100%)",
    border: "hsl(41.7391 20.3540% 77.8431%)",
    input: "hsl(41.7391 20.3540% 77.8431%)",
    ring: "hsl(0 0% 18.0392%)",
    radius: "0.5rem",
    chart1: "hsl(11.1377 86.5285% 62.1569%)",
    chart2: "hsl(0 0% 11.7647%)",
    chart3: "hsl(40 6.8182% 34.5098%)",
    chart4: "hsl(38.4000 12.5628% 60.9804%)",
    chart5: "hsl(41.7391 19.3277% 76.6667%)",
    sidebar: "hsl(42.0000 26.3158% 85.0980%)",
  },
  dark: {
    background: "hsl(0 0% 7.8431%)",
    foreground: "hsl(38.5714 23.3333% 88.2353%)",
    card: "hsl(0 0% 10.9804%)",
    cardForeground: "hsl(38.5714 23.3333% 88.2353%)",
    popover: "hsl(0 0% 10.9804%)",
    popoverForeground: "hsl(38.5714 23.3333% 88.2353%)",
    primary: "hsl(52.9412 15.5963% 78.6275%)",
    primaryForeground: "hsl(0 0% 21.1765%)",
    secondary: "hsl(0 0% 13.3333%)",
    secondaryForeground: "hsl(52.9412 15.5963% 78.6275%)",
    muted: "hsl(0 0% 16.4706%)",
    mutedForeground: "hsl(38.1818 4.6414% 53.5294%)",
    accent: "hsl(0 0% 21.1765%)",
    accentForeground: "hsl(52.9412 15.5963% 78.6275%)",
    destructive: "hsl(0 84.2365% 60.1961%)",
    destructiveForeground: "hsl(0 0% 100%)",
    border: "hsl(0 0% 17.2549%)",
    input: "hsl(0 0% 17.2549%)",
    ring: "hsl(52.9412 15.5963% 78.6275%)",
    radius: "0.5rem",
    chart1: "hsl(11.1377 86.5285% 62.1569%)",
    chart2: "hsl(33.9130 23.2323% 80.5882%)",
    chart3: "hsl(38.1818 4.6414% 53.5294%)",
    chart4: "hsl(40.0000 3.3708% 34.9020%)",
    chart5: "hsl(0 0% 23.1373%)",
    sidebar: "hsl(0 0% 6.2745%)",
  },
};

export const NAV_THEME: Record<"light" | "dark", Theme> = {
  light: {
    ...DefaultTheme,
    colors: {
      background: THEME.light.background,
      border: THEME.light.border,
      card: THEME.light.card,
      notification: THEME.light.destructive,
      primary: THEME.light.primary,
      text: THEME.light.foreground,
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      background: THEME.dark.background,
      border: THEME.dark.border,
      card: THEME.dark.card,
      notification: THEME.dark.destructive,
      primary: THEME.dark.primary,
      text: THEME.dark.foreground,
    },
  },
};

function useResolvedScheme(): "light" | "dark" {
  const {theme} = useUniwind();
  return theme === "dark" ? "dark" : "light";
}

export function useThemeColors() {
  return THEME[useResolvedScheme()];
}

export function useNavThemeColors() {
  return NAV_THEME[useResolvedScheme()];
}
