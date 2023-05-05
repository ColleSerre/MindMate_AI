import { Children } from "react";
import { View, StyleSheet, FlexAlignType } from "react-native";

interface RowProps {
  alignItems?: FlexAlignType | undefined;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  flex: number;
  children: JSX.Element[] | JSX.Element;
  additionalStyle?: object;
}

const Row = ({
  alignItems,
  justifyContent,
  flex,
  children,
  additionalStyle,
}: RowProps) => {
  const style = StyleSheet.create({
    row: {
      flexDirection: "row",
      alignItems: alignItems,
      justifyContent: justifyContent,
      flex: flex,
      ...additionalStyle,
    },
  });

  // pass in children as props
  return <View style={style.row}>{children}</View>;
};

export default Row;
