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
import Card from "../Components/Card";
import Input from "../Components/Input";
import Colors from "../Constants/Colors";
import NumberContainer from "../Components/NumberContainer";

const StartScreen = props => {
  const [enterValue, setEnterValue] = useState("");

  const [confirm, setConfirm] = useState(false);

  const [selectnumber, SetSelectNumber] = useState();

  const resetNumber = () => {
    setEnterValue("");
    setConfirm(false);
  };

  const AddNumber = () => {
    const choseNumber = parseInt(enterValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert("Invalid Number", "Please Enter nUmber between 1 , 99", [
        { text: "Okay", style: "destructive" }
      ]);
      return;
    }
    setConfirm(true);
    SetSelectNumber(choseNumber);
    setEnterValue("");
    Keyboard.dismiss();
  };

  let confirmOutput;
  if (confirm) {
    confirmOutput = (
      <Card style={styles.card}>
        <Text>Your Number that you select</Text>
        <NumberContainer>{selectnumber}</NumberContainer>
        <Button
          title="Start Game"
          onPress={props.onStartGame(selectnumber)}
          
        />
      </Card>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start New Game</Text>
      <Card style={styles.cardStyle}>
        <Text>Insert your Number</Text>
        <Input
          onChangeText={text => setEnterValue(text.replace(/[^0-9]/g, ""))}
          style={styles.input}
          maxLength={2}
          keyboardType="number-pad"
          blurOnSubmit
          value={enterValue}
        />
        <View style={styles.buttonContainer}>
          <View style={{ width: 100 }}>
            <Button
              color={Colors.primary}
              title="Reset"
              onPress={resetNumber}
            />
          </View>
          <View style={{ width: 100 }}>
            <Button color={Colors.accent} title="Add" onPress={AddNumber} />
          </View>
        </View>
      </Card>
      {confirmOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },

  title: {
    fontSize: 20,
    marginVertical: 10
  },

  cardStyle: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 100,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10
  },

  card: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default StartScreen;
