import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Keyboard
} from "react-native";
import NumberContainer from "../Components/NumberContainer";
import Card from "../Components/Card";

const genrateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return genrateRandom(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    genrateRandom(1, 100, props.userChoose)
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const NextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoose) ||
      (direction === "Highter" && currentGuess < props.userChoose)
    ) {
      Alert.alert("You Are Layer", "Its Not Your Number that you insert", [
        {
          text: "Sorry Are you kidding me",
          style: "cancel"
        }
      ]);      
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = genrateRandom(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };
  
  return (
    <View style={styles.container}>
      <Text> Random Number </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.cardStyle}>
      <Button title="Lower"
        onPress={NextGuessHandler.bind(this ,"lower")}
        
        />

        <Button title="Highter"
           onPress={NextGuessHandler.bind(this ,"Highter")}
        
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },

  cardStyle: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: 300,
    marginTop: 30
  }
});

export default GameScreen;
