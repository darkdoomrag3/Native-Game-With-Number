import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/Header";
import Input from "./Components/Input";
import StartScreen from "./Screen/StartScreen";
import GameScreen from "./Screen/GameScreen";


export default function App() {
  const [userNumber, setUserNumber] = useState();

  const StartGameHandler = selectNumber => {
    setUserNumber(selectNumber);
  };

  let content = <StartScreen onStartGame={StartGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoose={userNumber} />;
  }

  return (
    <View style={styles.container}>
      <Header title="Game" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
