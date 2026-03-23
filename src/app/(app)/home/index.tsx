import {THEME} from "@/lib/theme";
import {Feather} from "@expo/vector-icons";
import React from "react";
import {useColorScheme, View} from "react-native";

const Index = () => {
  const scheme = useColorScheme();
  const colors = THEME[scheme === "dark" ? "dark" : "light"];

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Feather name="home" size={20} color={colors.foreground} />
    </View>
  );
};

export default Index;
