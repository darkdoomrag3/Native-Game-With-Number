import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Card = props => {
  return <View style={{...props.style , ...styles.card}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.23,
    elevation: 6,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10
  }
});

export default Card;


