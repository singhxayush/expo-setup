import pkg from "./package.json";

const IS_DEV = process.env.APP_ENV === "development";

function slugify(str: string): string {
  if (!str) return "";

  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

const appName = pkg.name;
const slugifiedAppName = slugify(appName);
const normalizedAppName = normalize(appName);

export default {
  expo: {
    name: IS_DEV ? `${appName} (Dev)` : `${appName}`,
    description: "Expo nativewind development template",
    slug: slugifiedAppName,
    version: pkg.version,
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: IS_DEV ? `${appName}-dev` : `${appName}`,
    userInterfaceStyle: "automatic",
    ios: {
      icon: "./assets/expo.icon",
      bundleIdentifier: IS_DEV
        ? `com.singhxayush.${normalizedAppName}.dev`
        : `com.singhxayush.${normalizedAppName}`,
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: IS_DEV
        ? `com.singhxayush.${normalizedAppName}.dev`
        : `com.singhxayush.${normalizedAppName}`,
    },
    web: {
      // bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#208AEF",
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 76,
          },
        },
      ],
      [
        "expo-font",
        {
          fonts: [
            // JetBrainsMono
            "node_modules/@expo-google-fonts/jetbrains-mono/100Thin/JetBrainsMono_100Thin.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/200ExtraLight/JetBrainsMono_200ExtraLight.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/300Light/JetBrainsMono_300Light.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/400Regular/JetBrainsMono_400Regular.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/500Medium/JetBrainsMono_500Medium.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/600SemiBold/JetBrainsMono_600SemiBold.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/700Bold/JetBrainsMono_700Bold.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/800ExtraBold/JetBrainsMono_800ExtraBold.ttf",
            // JetBrainsMono Italic
            "node_modules/@expo-google-fonts/jetbrains-mono/100Thin_Italic/JetBrainsMono_100Thin_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/200ExtraLight_Italic/JetBrainsMono_200ExtraLight_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/300Light_Italic/JetBrainsMono_300Light_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/400Regular_Italic/JetBrainsMono_400Regular_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/500Medium_Italic/JetBrainsMono_500Medium_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/600SemiBold_Italic/JetBrainsMono_600SemiBold_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/700Bold_Italic/JetBrainsMono_700Bold_Italic.ttf",
            "node_modules/@expo-google-fonts/jetbrains-mono/800ExtraBold_Italic/JetBrainsMono_800ExtraBold_Italic.ttf",
            // PlayfairDisplay
            "node_modules/@expo-google-fonts/playfair-display/400Regular/PlayfairDisplay_400Regular.ttf",
            "node_modules/@expo-google-fonts/playfair-display/500Medium/PlayfairDisplay_500Medium.ttf",
            "node_modules/@expo-google-fonts/playfair-display/600SemiBold/PlayfairDisplay_600SemiBold.ttf",
            "node_modules/@expo-google-fonts/playfair-display/700Bold/PlayfairDisplay_700Bold.ttf",
            "node_modules/@expo-google-fonts/playfair-display/800ExtraBold/PlayfairDisplay_800ExtraBold.ttf",
            "node_modules/@expo-google-fonts/playfair-display/900Black/PlayfairDisplay_900Black.ttf",
            // PlayfairDisplay Italic
            "node_modules/@expo-google-fonts/playfair-display/400Regular_Italic/PlayfairDisplay_400Regular_Italic.ttf",
            "node_modules/@expo-google-fonts/playfair-display/500Medium_Italic/PlayfairDisplay_500Medium_Italic.ttf",
            "node_modules/@expo-google-fonts/playfair-display/600SemiBold_Italic/PlayfairDisplay_600SemiBold_Italic.ttf",
            "node_modules/@expo-google-fonts/playfair-display/700Bold_Italic/PlayfairDisplay_700Bold_Italic.ttf",
            "node_modules/@expo-google-fonts/playfair-display/800ExtraBold_Italic/PlayfairDisplay_800ExtraBold_Italic.ttf",
            "node_modules/@expo-google-fonts/playfair-display/900Black_Italic/PlayfairDisplay_900Black_Italic.ttf",
            // Inter
            "node_modules/@expo-google-fonts/inter/100Thin/Inter_100Thin.ttf",
            "node_modules/@expo-google-fonts/inter/200ExtraLight/Inter_200ExtraLight.ttf",
            "node_modules/@expo-google-fonts/inter/300Light/Inter_300Light.ttf",
            "node_modules/@expo-google-fonts/inter/400Regular/Inter_400Regular.ttf",
            "node_modules/@expo-google-fonts/inter/500Medium/Inter_500Medium.ttf",
            "node_modules/@expo-google-fonts/inter/600SemiBold/Inter_600SemiBold.ttf",
            "node_modules/@expo-google-fonts/inter/700Bold/Inter_700Bold.ttf",
            "node_modules/@expo-google-fonts/inter/800ExtraBold/Inter_800ExtraBold.ttf",
            "node_modules/@expo-google-fonts/inter/900Black/Inter_900Black.ttf",
            // Inter Italic
            "node_modules/@expo-google-fonts/inter/100Thin_Italic/Inter_100Thin_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/200ExtraLight_Italic/Inter_200ExtraLight_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/300Light_Italic/Inter_300Light_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/400Regular_Italic/Inter_400Regular_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/500Medium_Italic/Inter_500Medium_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/600SemiBold_Italic/Inter_600SemiBold_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/700Bold_Italic/Inter_700Bold_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/800ExtraBold_Italic/Inter_800ExtraBold_Italic.ttf",
            "node_modules/@expo-google-fonts/inter/900Black_Italic/Inter_900Black_Italic.ttf",
            // MaterialSymbols
            "node_modules/@expo-google-fonts/material-symbols/100Thin/MaterialSymbols_100Thin.ttf",
            "node_modules/@expo-google-fonts/material-symbols/200ExtraLight/MaterialSymbols_200ExtraLight.ttf",
            "node_modules/@expo-google-fonts/material-symbols/300Light/MaterialSymbols_300Light.ttf",
            "node_modules/@expo-google-fonts/material-symbols/400Regular/MaterialSymbols_400Regular.ttf",
            "node_modules/@expo-google-fonts/material-symbols/500Medium/MaterialSymbols_500Medium.ttf",
            "node_modules/@expo-google-fonts/material-symbols/600SemiBold/MaterialSymbols_600SemiBold.ttf",
            "node_modules/@expo-google-fonts/material-symbols/700Bold/MaterialSymbols_700Bold.ttf",
          ],
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: false, // earlier set to true
    },
  },
};
