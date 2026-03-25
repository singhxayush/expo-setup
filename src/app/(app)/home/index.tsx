import {useThemeColors} from "@/lib/theme";
import {Feather} from "@expo/vector-icons";
import {Link} from "expo-router";
import React from "react";
import {Text, View} from "react-native";

const Index = () => {
  const colors = useThemeColors();

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Feather name="home" size={20} color={colors.foreground} />
      <Text>xxx</Text>
      <Link
        className="text-cyan-700 dark:text-cyan-400 underline"
        href={"/(app)/home/icons"}
      >
        Iconsss
      </Link>
    </View>
  );
};

export default Index;
