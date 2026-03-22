import React from "react";
import {Text, View} from "react-native";

export default function fonts() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-foreground text-xs font-sans italic">
        Witcher!!!
      </Text>
      <Text className="text-foreground text-md font-sans-semibold-italic">
        Witcher!!!
      </Text>
      <Text className="text-foreground text-lg font-sans-bold">Witcher!!!</Text>
      <Text className="text-foreground font-serif">Witcher!!!</Text>
      <Text className="text-foreground font-serif-black-italic text-2xl">
        Witcher!!!
      </Text>
      <Text className="text-foreground font-mono">Witcher!!!</Text>

      <View className="mt-10 border-2 border-zinc-500 min-w-48 p-2 rounded-xl flex items-center justify-center">
        {/* https://fonts.google.com/icons */}

        <Text className="text-[40px] text-foreground font-material-symbols">
          barcode_reader
        </Text>
        <Text className="text-[40px] text-foreground font-material-symbols">
          local_florist
        </Text>
        <Text className="text-[40px] text-foreground font-material-symbols">
          cannabis
        </Text>
        <Text className="text-[20px] text-foreground font-material-symbols">
          ios unkown android
        </Text>
      </View>
    </View>
  );
}
