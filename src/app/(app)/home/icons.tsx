import {Icon} from "@/components/ui/icon";
import {useThemeColors} from "@/lib/theme";
import {FlashList} from "@shopify/flash-list";
import type {LucideIcon} from "lucide-react-native";
import {
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  CameraIcon,
  HeartIcon,
  HomeIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  MusicIcon,
  PhoneIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  StarIcon,
  UserIcon,
} from "lucide-react-native";
import {Dimensions, ScrollView, View} from "react-native";

const ICONS: LucideIcon[] = [
  HeartIcon,
  StarIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
  UserIcon,
  SettingsIcon,
  CameraIcon,
  MapPinIcon,
  MusicIcon,
  ShoppingCartIcon,
  BookmarkIcon,
  MessageCircleIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
];

const NUM_COLUMNS = 4;
const CELL_SIZE = Dimensions.get("window").width / NUM_COLUMNS;

export default function IconGrid() {
  const colors = useThemeColors();
  return (
    <ScrollView className=" bg-background">
      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              //   borderRightWidth: 0.5,
              //   borderBottomWidth: 0.5,
              //   borderColor: colors.foreground,
            }}
            className="items-center justify-center border-r-[0.5] border-b-[0.5] border-foreground"
          >
            <IconComponent
              size={24}
              color={colors.foreground}
              strokeWidth={1} // default is 2
            />
          </View>
        )}
      />
      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRightWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: colors.foreground,
            }}
            className="items-center justify-center"
          >
            <IconComponent
              size={24}
              color={colors.accentForeground} // stroke color
              fill={colors.accentForeground} // fill color
              //   stroke={"#000"}
              //   strokeDasharray={4}
              //   strokeWidth={0.1}
            />
          </View>
        )}
      />
      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRightWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: colors.foreground,
            }}
            className="items-center justify-center"
          >
            <Icon
              as={IconComponent}
              size={24}
              color="#ff0000" // stroke
              fill="transparent" // fill
              strokeWidth={2}
            />
          </View>
        )}
      />

      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRightWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: colors.foreground,
            }}
            className="items-center justify-center"
          >
            <IconComponent className="size-6 text-foreground" />
          </View>
        )}
      />

      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRightWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: colors.foreground,
            }}
            className="items-center justify-center"
          >
            <Icon as={IconComponent} className="size-6 text-foreground" />
          </View>
        )}
      />

      <FlashList
        data={ICONS}
        className="border-[0.5px] border-foreground border-b-0 pb-20"
        numColumns={NUM_COLUMNS}
        keyExtractor={(_, i) => String(i)}
        renderItem={({item: IconComponent}) => (
          <View
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRightWidth: 0.5,
              borderBottomWidth: 0.5,
              borderColor: colors.foreground,
            }}
            className="items-center justify-center"
          >
            <Icon as={IconComponent} className="size-6 text-foreground" />
          </View>
        )}
      />
    </ScrollView>
  );
}
