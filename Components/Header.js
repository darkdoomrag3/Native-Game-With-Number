import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/Colors";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.accent,
    alignItems : "center",
    justifyContent : "center",
    paddingTop : 20
  },

headerTitle :{
color : "black",
fontSize : 20,

}

});

export default Header;
