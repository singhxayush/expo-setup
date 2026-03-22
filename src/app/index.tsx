import ThemeToggle from "@/components/ThemeToggle";
import {useTheme} from "@/providers/ThemeProvider";
import {Link} from "expo-router";
import {Text, View} from "react-native";

export default function Index() {
  const theme = useTheme();

  return (
    <View className="flex-1 items-center justify-center p-4 bg-background dark:bg-dark-background">
      <Text className="text-pink-300 px-6 py-2 rounded-md">
        Edit src/app/index.tsx to edit this screen s.
      </Text>
      <Link
        style={{
          paddingTop: 20,
        }}
        href={"/animate"}
        className="text-blue-300 underline"
      >
        First Animation
      </Link>

      <Link
        style={{
          paddingTop: 20,
        }}
        href={"/animate"}
        className="text-blue-300 underline"
      >
        First Animation 2
      </Link>

      <Link
        style={{
          paddingTop: 20,
          paddingBottom: 40,
        }}
        href={"/shadcn"}
        className="text-blue-300 underline"
      >
        Shadcn Like component
      </Link>

      <Text className="text-zinc-950 dark:text-yellow-200 text-2xl font-bold mb-4">
        Hello Toggle
      </Text>

      <ThemeToggle />
    </View>
  );
}
