import Feather from "@expo/vector-icons/Feather";
import {useEffect, useRef} from "react";
import {
  Animated,
  Pressable,
  View,
  useColorScheme as useDeviceColorScheme,
} from "react-native";
import {useTheme} from "../providers/ThemeProvider";

type ThemeMode = "light" | "system" | "dark";

const MODES: ThemeMode[] = ["light", "system", "dark"];
const BUTTON_SIZE = 44; // padding 12 * 2 + icon 20
const GAP = 4;

const ThemeToggle = () => {
  const {theme, setTheme} = useTheme();
  const deviceTheme = useDeviceColorScheme() ?? "light";
  const resolvedTheme = theme === "system" ? deviceTheme : theme;

  const slideAnim = useRef(new Animated.Value(MODES.indexOf(theme))).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: MODES.indexOf(theme),
      useNativeDriver: true,
      tension: 180,
      friction: 18,
    }).start();
  }, [theme]);

  // Single pill bg: white in light context, zinc-600 in dark context
  const pillBg = resolvedTheme === "dark" ? "#52525b" : "#ffffff";

  // Per-icon color: active = themed, inactive = gray
  const getIconColor = (mode: ThemeMode) => {
    if (theme !== mode) return "#9ca3af"; // gray-400
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  };

  const pillTranslateX = slideAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, BUTTON_SIZE + GAP, (BUTTON_SIZE + GAP) * 2],
  });

  return (
    <View
      style={{position: "relative"}}
      className="flex-row bg-stone-300 dark:bg-zinc-800 p-1 rounded-full items-center"
    >
      {/* Sliding pill — sits behind all buttons */}
      <Animated.View
        style={{
          position: "absolute",
          left: 4, // matches parent p-1
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
          borderRadius: 9999,
          backgroundColor: pillBg,
          transform: [{translateX: pillTranslateX}],
          // shadow
          elevation: 2,
          shadowColor: "#000",
          shadowOffset: {width: 0, height: 1},
          shadowOpacity: 0.12,
          shadowRadius: 2,
        }}
      />

      {MODES.map((mode, index) => (
        <Pressable
          key={mode}
          onPress={() => setTheme(mode)}
          style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: index === 0 ? 0 : GAP,
            // no background here — pill handles it
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
