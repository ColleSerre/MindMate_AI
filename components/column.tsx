import { View } from "react-native";

const Column = ({ children, ...props }) => {
  return (
    <View style={{ flexDirection: "column" }} {...props}>
      {children}
    </View>
  );
};

export default Column;