import { Button, Text, View, Animated, Pressable } from "react-native";
import HomeStyle from "../styles/index";
import Row from "../components/row";
import Column from "../components/column";
import Spacer from "../components/spacer";
import { LinearGradient } from "expo-linear-gradient";
import ProgressButton from "../components/progressbtn";
import { useRef, useState } from "react";

const Home = () => {
  return (
    <View style={HomeStyle.container}>
      <LinearGradient
        colors={["rgba(84, 173, 255, 0.77)", "rgba(202, 28, 245, 0.55)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={HomeStyle.background}
      >
        <Spacer flex={1} />
        <Row
          alignItems="flex-start"
          justifyContent={"flex-end"}
          flex={1}
          additionalStyle={{
            paddingRight: 20,
          }}
        >
          <Text style={HomeStyle.header}>MindMate_AI</Text>
        </Row>
        <Spacer flex={3} />
        <Column
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={HomeStyle.getStartedButton}>
            <Button title={"Login"} color={"white"} onPress={() => {}} />
          </View>
          <ProgressButton onPress={() => {}} title={"Get Started"} />
        </Column>
        <Spacer flex={1} />
      </LinearGradient>
    </View>
  );
};

export default Home;
