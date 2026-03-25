import {useThemeColors} from "@/lib/theme";
import {cn} from "@/lib/utils";
import Feather from "@expo/vector-icons/Feather";
import type {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {Tabs} from "expo-router";
import {type ComponentProps} from "react";
import {Pressable, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const icons: ComponentProps<typeof Feather>["name"][] = [
  "home",
  "search",
  "user",
];

function FloatingTabBar({state, navigation}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();

  return (
    <View
      className={cn(
        "absolute flex flex-row items-center justify-around inset-x-6 bg-secondary border-2 border-accent",
      )}
      style={{
        bottom: insets.bottom,
        // left: 20,
        // right: 20,
        height: 60,
        borderRadius: 30,
        // flexDirection: "row",
        // backgroundColor: colors.card,
        // borderWidth: 1,
        // borderColor: colors.border,
        // shadowColor: "#000",
        // shadowOffset: {width: 0, height: 4},
        // shadowOpacity: 0.1,
        // shadowRadius: 12,
        // elevation: 8,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{alignItems: "center", justifyContent: "center"}}
            className={cn("size-10 rounded-2xl", isFocused && "bg-zinc-400/20")}
          >
            <Feather
              name={icons[index]}
              size={22}
              color={isFocused ? colors.primary : colors.mutedForeground}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

export default function AppLayout() {
  return (
    <Tabs
      tabBar={(props) => <FloatingTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" options={{title: "Home"}} />
      <Tabs.Screen name="search/index" options={{title: "Search"}} />
      <Tabs.Screen name="profile" options={{title: "Profile"}} />
    </Tabs>
  );
}

// import {THEME} from "@/lib/theme";
// import Feather from "@expo/vector-icons/Feather";
// import {Tabs} from "expo-router";
// import {useColorScheme} from "react-native";

// export default function AppLayout() {
//   const scheme = useColorScheme();
//   const colors = THEME[scheme === "dark" ? "dark" : "light"];

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: colors.primary,
//         tabBarInactiveTintColor: colors.mutedForeground,

//         tabBarStyle: {
//           height: 80, // total bar height
//           paddingBottom: 8, // space below icons
//           paddingTop: 12, // space above icons
//           paddingHorizontal: 16, // left/right padding
//           borderTopWidth: 1, // top border thickness
//           borderTopColor: colors.border,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="home/index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({color, size}) => (
//             <Feather name="home" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="search/index"
//         options={{
//           title: "Search",
//           tabBarIcon: ({color, size}) => (
//             <Feather name="search" size={size} color={color} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Profile",
//           tabBarIcon: ({color, size}) => (
//             <Feather name="user" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
