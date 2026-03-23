import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {TooltipLongPressTrigger} from "@/components/ui/longpress-tooltip";
import {Text} from "@/components/ui/text";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {useState} from "react";
import {View} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-controller";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <KeyboardAwareScrollView
      className="flex-1 bg-background"
      bottomOffset={16} // extra space between input and keyboard top edge
    >
      <View className="p-4 gap-8 pt-20">
        {/* ── BADGES ── */}
        <View className="gap-2">
          <Text className="text-foreground font-sans-semibold text-lg">
            Badges
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <Badge>
              <Text>Default</Text>
            </Badge>
            <Badge variant="secondary">
              <Text>Secondary</Text>
            </Badge>
            <Badge variant="outline">
              <Text>Outline</Text>
            </Badge>
            <Badge variant="destructive">
              <Text>Destructive</Text>
            </Badge>
          </View>
        </View>

        {/* ── BUTTONS ── */}
        <View className="gap-2">
          <Text className="text-foreground font-sans-semibold text-lg">
            Buttons
          </Text>
          <View className="gap-2">
            <Button>
              <Text>Default</Text>
            </Button>
            <Button variant="secondary">
              <Text>Secondary</Text>
            </Button>
            <Button variant="outline">
              <Text>Outline</Text>
            </Button>
            <Button variant="ghost">
              <Text>Ghost</Text>
            </Button>
            <Button variant="destructive">
              <Text>Destructive</Text>
            </Button>
            <Button variant="link">
              <Text>Link</Text>
            </Button>
            <Button disabled>
              <Text>Disabled</Text>
            </Button>
          </View>
        </View>

        {/* ── INPUT ── */}
        <View className="gap-2">
          <Text className="text-foreground font-sans-semibold text-lg">
            Input
          </Text>
          <Input
            placeholder="Type something..."
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Input placeholder="Disabled input" editable={false} />
        </View>

        {/* ── CARDS ── */}
        <View className="gap-2">
          <Text className="text-foreground font-sans-semibold text-lg">
            Cards
          </Text>

          <Card>
            <CardHeader>
              <CardTitle>
                <Text>Basic Card</Text>
              </CardTitle>
              <CardDescription>
                <Text>Card description goes here</Text>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text className="text-foreground">
                This is the card content area. It can hold any content.
              </Text>
            </CardContent>
            <CardFooter>
              <Button className="flex-1">
                <Text>Action</Text>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <Text>Card with Badge</Text>
              </CardTitle>
            </CardHeader>
            <CardContent className="gap-3">
              <View className="flex-row gap-2">
                <Badge>
                  <Text>React Native</Text>
                </Badge>
                <Badge variant="secondary">
                  <Text>Expo</Text>
                </Badge>
                <Badge variant="outline">
                  <Text>Uniwind</Text>
                </Badge>
              </View>
              <Input
                placeholder="Input inside card..."
                value={inputValue}
                onChangeText={setInputValue}
              />
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" className="flex-1">
                <Text>Cancel</Text>
              </Button>
              <Button className="flex-1">
                <Text>Confirm</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>

        {/* ── COMPOSED ── */}
        <View className="gap-2">
          <Text className="text-foreground font-sans-semibold text-lg">
            Composed
          </Text>
          <Card>
            <CardHeader>
              <View className="flex-row items-center justify-between">
                <CardTitle>
                  <Text>Sign In</Text>
                </CardTitle>
                <Badge variant="outline">
                  <Text>Free</Text>
                </Badge>
              </View>
              <CardDescription>
                <Text>Enter your credentials to continue</Text>
              </CardDescription>
            </CardHeader>
            <CardContent className="gap-3">
              <Input placeholder="Email" keyboardType="email-address" />
              <Input placeholder="Password" secureTextEntry />
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="ghost" className="flex-1">
                <Text>Register</Text>
              </Button>
              <Button className="flex-1">
                <Text>Sign In</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>
      </View>

      {/* Tooltip */}
      <View className="flex items-center justify-center py-20 gap-10">
        {/* Arrow on (default, top) */}
        <Tooltip>
          <TooltipLongPressTrigger asChild>
            <Button variant="default">
              <Text>Top</Text>
            </Button>
          </TooltipLongPressTrigger>
          <TooltipContent side="top">
            <Text>Shows Right</Text>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Text>Right</Text>
            </Button>
          </TooltipTrigger>

          <TooltipContent side="right" sideOffset={10}>
            <Text>Shows Right</Text>
          </TooltipContent>
        </Tooltip>

        {/* Custom arrow color for dark theme */}
        <Tooltip>
          <TooltipLongPressTrigger asChild>
            <Button variant="outline">
              <Text>Custom color</Text>
            </Button>
          </TooltipLongPressTrigger>
          <TooltipContent className="bbg-background">
            <Text>Soft-edged arrow!</Text>
          </TooltipContent>
        </Tooltip>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Index;
