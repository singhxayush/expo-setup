import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import Animated, {useSharedValue, withSpring} from "react-native-reanimated";

const Animate2 = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(Math.random() * 100 + 50);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        onPointerEnter={handlePress}
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
          paddingBottom: 10,
        }}
      />
      <Button onPress={handlePress} title="Click me" />
      <TextInput
        placeholder="Hello world!"
        style={{
          borderWidth: 2,
          borderColor: "#000000",
          marginTop: 10,
          minWidth: 200,
          fontSize: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Animate2;
