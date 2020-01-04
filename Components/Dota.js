import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";
import Colors from '../Constants/Colors';




const Dota = (props) => {

    const [enterValue, setEnterValue] = useState("")

    const [confirm, setConfirm] = useState(false)

    const [selectnumber, SetSelectNumber] = useState();



    const resetNumber = () => {
        setEnterValue("");
        setConfirm(false);


    }


    const AddNumber = () => {

        let chooseNumber = parseInt(enterValue);

        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {

            alert.alert("You suck Mother fucker")

        }

        setConfirm(true);
        SetSelectNumber(chooseNumber);
        setEnterValue("");


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

    )


}

export default Dota;