// Shadcn.tsx
import React from "react";
import {Text, TouchableOpacity, View} from "react-native";

const Shadcn = () => {
  const onButtonPress = () => {
    console.log("Button pressed");
  };
  return (
    <View className="flex-1 items-center justify-center p-4 bg-background dark:bg-dark-background">
      <View className="w-full rounded-lg border border-border dark:border-dark-border bg-card dark:bg-dark-card p-6 shadow-md">
        <Text className="text-xl font-semibold text-foreground dark:text-dark-foreground">
          Shadcn Theme Configured!
        </Text>

        <Text className="mt-2 text-muted-foreground dark:text-dark-muted-foreground">
          Changing the theme now automatically resolves these colors.
        </Text>

        <TouchableOpacity
          onPress={onButtonPress}
          className="mt-4 rounded-md bg-primary dark:bg-dark-primary px-4 py-2"
        >
          <Text className="text-center font-medium text-primary-foreground dark:text-dark-primary-foreground">
            Toggle Theme
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Shadcn;
