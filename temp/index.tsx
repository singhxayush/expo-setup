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
        className="text-cyan-700 dark:text-cyan-400 underline"
      >
        First Animation
      </Link>

      <Link
        style={{
          paddingTop: 20,
        }}
        href={"/fonts"}
        className="text-cyan-700 dark:text-cyan-400 underline"
      >
        Different kinda Fonts
      </Link>

      <Link
        style={{
          paddingTop: 20,
        }}
        href={"/shadcn"}
        className="text-cyan-700 dark:text-cyan-400 underline"
      >
        Shadcn Like component
      </Link>

      <Link
        style={{
          paddingTop: 20,
          paddingBottom: 40,
        }}
        href={"/home"}
        className="text-cyan-700 dark:text-cyan-400 underline"
      >
        App Layout - Home Page
      </Link>

      <Text className="text-zinc-950 dark:text-yellow-200 text-2xl font-bold mb-4">
        Hello Toggle
      </Text>

      <ThemeToggle />
    </View>
  );
}
