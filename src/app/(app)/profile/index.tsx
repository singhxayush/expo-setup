// app/(app)/profile/index.tsx
import {Card, CardContent} from "@/components/ui/card";
import {Separator} from "@/components/ui/separator";
import {Text} from "@/components/ui/text";
import {THEME} from "@/lib/theme";
import Feather from "@expo/vector-icons/Feather";
import {router} from "expo-router";
import {Image, Pressable, ScrollView, useColorScheme, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = THEME[scheme === "dark" ? "dark" : "light"];

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerStyle={{
        paddingTop: insets.top + 24,
        paddingHorizontal: 24,
        paddingBottom: 40,
      }}
    >
      {/* Avatar + name block */}
      <View className="items-center gap-3 mb-8">
        <View className="w-24 h-24 rounded-full bg-muted items-center justify-content overflow-hidden">
          <Image
            source={{uri: "https://i.pravatar.cc/150?img=12"}}
            className="w-24 h-24"
          />
        </View>
        <View className="items-center gap-1">
          <Text className="text-2xl font-semibold text-foreground">
            Ayush Kumar
          </Text>
          <Text className="text-sm text-muted-foreground">
            ayush@example.com
          </Text>
        </View>
      </View>

      {/* Stats row */}
      <Card className="mb-6">
        <CardContent className="flex-row justify-around py-4">
          <View className="items-center gap-1">
            <Text className="text-xl font-semibold text-foreground">128</Text>
            <Text className="text-xs text-muted-foreground">Posts</Text>
          </View>
          <Separator orientation="vertical" className="h-10" />
          <View className="items-center gap-1">
            <Text className="text-xl font-semibold text-foreground">4.2k</Text>
            <Text className="text-xs text-muted-foreground">Followers</Text>
          </View>
          <Separator orientation="vertical" className="h-10" />
          <View className="items-center gap-1">
            <Text className="text-xl font-semibold text-foreground">312</Text>
            <Text className="text-xs text-muted-foreground">Following</Text>
          </View>
        </CardContent>
      </Card>

      <Card className="p-0">
        <CardContent className="p-0 overflow-hidden rounded-xl">
          <Pressable
            className="w-full flex-row justify-between items-center px-4 py-4 active:bg-muted"
            onPress={() => router.push("/profile/settings")}
          >
            <View className="flex-row items-center gap-3">
              <Feather name="settings" size={18} color={colors.foreground} />
              <Text className="text-foreground text-base">Settings</Text>
            </View>
            <Feather
              name="chevron-right"
              size={16}
              color={colors.mutedForeground}
            />
          </Pressable>

          <Separator />

          <Pressable
            className="w-full flex-row justify-between items-center px-4 py-4 active:bg-muted"
            onPress={() => {}}
          >
            <View className="flex-row items-center gap-3">
              <Feather name="bell" size={18} color={colors.foreground} />
              <Text className="text-foreground text-base">Notifications</Text>
            </View>
            <Feather
              name="chevron-right"
              size={16}
              color={colors.mutedForeground}
            />
          </Pressable>

          <Separator />

          <Pressable
            className="w-full flex-row justify-between items-center px-4 py-4 active:bg-muted"
            onPress={() => {}}
          >
            <View className="flex-row items-center gap-3">
              <Feather name="log-out" size={18} color={colors.destructive} />
              <Text className="text-destructive text-base">Sign out</Text>
            </View>
          </Pressable>
        </CardContent>
      </Card>
    </ScrollView>
  );
}

// import React from "react";
// import {Text, View} from "react-native";

// const Index = () => {
//   return (
//     <View className="flex-1 items-center justify-center bg-background">
//       <Text className="text-foreground text-xs font-sans italic">
//         Witcher!!!
//       </Text>
//       <Text className="text-foreground text-md font-sans-semibold-italic">
//         Witcher!!!
//       </Text>
//       <Text className="text-foreground text-lg font-sans-bold">Witcher!!!</Text>
//       <Text className="text-foreground font-serif">Witcher!!!</Text>
//       <Text className="text-foreground font-serif-black-italic text-2xl">
//         Witcher!!!
//       </Text>
//       <Text className="text-foreground font-mono">Witcher!!!</Text>

//       <View className="mt-10 border-2 border-zinc-500 min-w-48 p-2 rounded-xl flex items-center justify-center">
//         {/* https://fonts.google.com/icons */}

//         <Text className="text-[40px] text-foreground font-material-symbols">
//           barcode_reader
//         </Text>
//         <Text className="text-[40px] text-foreground font-material-symbols">
//           local_florist
//         </Text>
//         <Text className="text-[40px] text-foreground font-material-symbols">
//           cannabis
//         </Text>
//         <Text className="text-[20px] text-foreground font-material-symbols">
//           ios unkown android
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default Index;
