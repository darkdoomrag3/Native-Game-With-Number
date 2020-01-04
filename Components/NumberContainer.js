import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from '../Constants/Colors';

const NumberContainer = props => {
  return (
    <View style={styles.container} >
      <Text style={{ fontSize: 22, color: Colors.accent }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    marginVertical : 10,
    padding : 10,
    borderRadius : 2,
    justifyContent : "center"
  }
});

export default NumberContainer;
