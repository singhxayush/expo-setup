// app/(app)/profile/settings.tsx
import ThemeToggle from "@/components/ThemeToggle";
import {Separator} from "@/components/ui/separator";
import {Text} from "@/components/ui/text";
import {THEME} from "@/lib/theme";
import Feather from "@expo/vector-icons/Feather";
import {router} from "expo-router";
import {ReactNode, useState} from "react";
import {Pressable, ScrollView, useColorScheme, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

// --- Types ---

type FeatherIconName = keyof typeof Feather.glyphMap;

type BaseItem = {
  icon: FeatherIconName;
  label: string;
};

// Use standard string for href to bypass Expo's strict typed routes for missing pages
type LinkItem = BaseItem & {
  type: "link";
  href: string;
};

type ExpandableItem = BaseItem & {
  type: "expandable";
  content: ReactNode;
};

type SettingsItem = LinkItem | ExpandableItem;

type SettingsSection = {
  title: string;
  items: SettingsItem[];
};

// --- Data ---
const SETTINGS_SECTIONS: SettingsSection[] = [
  {
    title: "Account",
    items: [
      {
        type: "link",
        icon: "user",
        label: "Edit profile",
        href: "/profile/edit",
      },
      {
        type: "link",
        icon: "lock",
        label: "Change password",
        href: "/profile/password",
      },
      {
        type: "link",
        icon: "mail",
        label: "Email preferences",
        href: "/profile/email",
      },
    ],
  },
  {
    title: "App",
    items: [
      {
        type: "expandable",
        icon: "moon",
        label: "Appearance",
        content: (
          <Text className="text-muted-foreground">
            Appearance toggle settings go here.
          </Text>
        ),
      },
      {
        type: "expandable",
        icon: "bell",
        label: "Notifications",
        content: (
          <Text className="text-muted-foreground">
            Notification toggle settings go here.
          </Text>
        ),
      },
      {
        type: "expandable",
        icon: "globe",
        label: "Language",
        content: (
          <Text className="text-muted-foreground">
            Select your preferred language here.
          </Text>
        ),
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        type: "link",
        icon: "help-circle",
        label: "Help center",
        href: "/support/help",
      },
      {
        type: "link",
        icon: "shield",
        label: "Privacy policy",
        href: "/support/privacy",
      },
      {
        type: "link",
        icon: "file-text",
        label: "Terms of service",
        href: "/support/terms",
      },
    ],
  },
];

// --- Component ---

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const colors = THEME[scheme === "dark" ? "dark" : "light"];

  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );

  const toggleItem = (label: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <View
      className="flex-1 bg-background"
      style={{paddingBottom: insets.bottom}}
    >
      {/* Handle bar */}
      <View className="items-center pt-8">
        <View className="w-10 h-1 rounded-full bg-muted-foreground opacity-30" />
      </View>

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4">
        <Text className="text-xl font-semibold text-foreground">Settings</Text>
        {/* <Pressable
          onPress={() => router.back()}
          className="w-8 h-8 rounded-full bg-muted items-center justify-center"
        >
          <Feather name="x" size={16} color={colors.foreground} />
        </Pressable> */}
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 24,
          paddingBottom: 32,
        }}
      >
        {SETTINGS_SECTIONS.map((section) => (
          <View key={section.title} className="gap-2">
            <Text className="text-xs font-medium text-muted-foreground uppercase px-2 tracking-wider">
              {section.title}
            </Text>

            <View className="rounded-xl overflow-hidden bg-card border border-border">
              {section.items.map((item, index) => {
                const isExpandable = item.type === "expandable";
                const isExpanded = isExpandable && expandedItems[item.label];

                return (
                  <View key={item.label}>
                    <Pressable
                      className="flex-row items-center justify-between px-4 py-4 active:bg-muted"
                      onPress={() => {
                        if (item.type === "expandable") {
                          toggleItem(item.label);
                        } else if (item.type === "link") {
                          // Bypass strict types with 'as any'
                          router.push(item.href as any);
                        }
                      }}
                    >
                      <View className="flex-row items-center gap-3">
                        <Feather
                          name={item.icon}
                          size={18}
                          color={colors.foreground}
                        />
                        <Text className="text-foreground text-base">
                          {item.label}
                        </Text>
                      </View>

                      <Feather
                        name={
                          isExpandable
                            ? isExpanded
                              ? "chevron-up"
                              : "chevron-down"
                            : "chevron-right"
                        }
                        size={16}
                        color={colors.mutedForeground}
                      />
                    </Pressable>

                    {isExpanded && item.type === "expandable" && (
                      <View className="px-4 pb-4 pl-11">{item.content}</View>
                    )}

                    {index < section.items.length - 1 && <Separator />}
                  </View>
                );
              })}
            </View>
          </View>
        ))}

        <View className="flex items-center justify-center mt-4">
          <ThemeToggle />
        </View>
      </ScrollView>
    </View>
  );
}
