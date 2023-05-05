import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";
import HomeStyle from "../styles/index";

const ProgressButton = ({ onPress, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setIsLoading(true);
    onPress();
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const interpolatedValue = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  });

  const buttonContent = isLoading ? (
    <View style={styles.buttonInnerContainer}>
      <Animated.View
        style={[styles.progressBar, { width: interpolatedValue }]}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  ) : (
    <Text style={styles.buttonText}>{title}</Text>
  );

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, HomeStyle.getStartedButton]}
      onPress={handlePress}
    >
      {buttonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: HomeStyle.getStartedButton.backgroundColor,
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    overflow: "hidden",
    height: 50,
    width: "100%",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "#007aff",
    borderRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 17,
  },
});

export default ProgressButton;
