import Feather from "@expo/vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from "expo-haptics";
import {useEffect, useRef} from "react";
import {Animated, Pressable, View} from "react-native";
import {Uniwind, useUniwind} from "uniwind";

type ThemeMode = "light" | "system" | "dark";

const MODES: ThemeMode[] = ["light", "system", "dark"];
const BUTTON_SIZE = 44;
const GAP = 4;
const PILL_LIGHT = "#e9e4d8";
const PILL_DARK = "#141414";

const ThemeToggle = () => {
  const {theme, hasAdaptiveThemes} = useUniwind();

  // "system" when adaptive, otherwise the resolved "light" | "dark"
  const activeTheme = (hasAdaptiveThemes ? "system" : theme) as ThemeMode;
  // theme from useUniwind is always the resolved light/dark — use for colors
  const resolvedTheme = theme;

  const setTheme = (mode: ThemeMode) => {
    Uniwind.setTheme(mode);
    AsyncStorage.setItem("theme", mode);
  };

  // Pill POSITION — driven by activeTheme so "system" slot is reached
  const slideAnim = useRef(
    new Animated.Value(MODES.indexOf(activeTheme)),
  ).current;

  // Pill COLOR — driven by resolvedTheme (always light or dark)
  const colorAnim = useRef(
    new Animated.Value(resolvedTheme === "dark" ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: MODES.indexOf(activeTheme),
      useNativeDriver: true,
      tension: 180,
      friction: 18,
    }).start();
  }, [activeTheme, slideAnim]); // activeTheme changes when toggling system on/off

  useEffect(() => {
    Animated.timing(colorAnim, {
      toValue: resolvedTheme === "dark" ? 1 : 0,
      duration: 250,
      useNativeDriver: false, // backgroundColor can't use native driver
    }).start();
  }, [colorAnim, resolvedTheme]); // resolvedTheme changes when actual light/dark flips

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, BUTTON_SIZE + GAP, (BUTTON_SIZE + GAP) * 2],
  });

  const pillBgColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [PILL_LIGHT, PILL_DARK],
  });

  const getIconColor = (mode: ThemeMode) => {
    if (activeTheme !== mode) return "#9ca3af"; // inactive — gray
    // active icon color based on resolved light/dark
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  };

  return (
    <View
      style={{position: "relative"}}
      className="flex-row bg-stone-300 dark:bg-zinc-800 p-1 rounded-full items-center"
    >
      {/* OUTER: translate only — native driver */}
      <Animated.View
        style={{
          position: "absolute",
          left: 4,
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
          transform: [{translateX: pillTranslateX}],
        }}
      >
        {/* INNER: backgroundColor only — JS driver, separate node */}
        <Animated.View
          style={{
            flex: 1,
            borderRadius: 9999,
            backgroundColor: pillBgColor,
            elevation: 2,
            shadowColor: "#000",
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.12,
            shadowRadius: 2,
          }}
        />
      </Animated.View>

      {MODES.map((mode, index) => (
        <Pressable
          key={mode}
          onPress={() => {
            Haptics.performAndroidHapticsAsync(
              Haptics.AndroidHaptics.Segment_Tick,
            );

            if (activeTheme === mode) return;
            setTheme(mode);
          }}
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: index === 0 ? 0 : GAP,
          }}
        >
          <Feather
            name={
              mode === "light"
                ? "sun"
                : mode === "system"
                  ? "smartphone"
                  : "moon"
            }
            size={20}
            color={getIconColor(mode)}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default ThemeToggle;
