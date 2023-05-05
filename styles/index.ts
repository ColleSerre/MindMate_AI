import { StyleSheet } from "react-native";

const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  getStartedButton: {
    width: "70%",
    height: 50,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: "rgba(217, 217, 217, 0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeStyle;
