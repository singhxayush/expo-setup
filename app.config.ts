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
      bundler: "metro",
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
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: false, // earlier set to true
    },
  },
};
