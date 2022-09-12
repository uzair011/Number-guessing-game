import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(number) {
    setEnteredNumber(number);
    console.log(number);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const inputNumber = parseInt(enteredNumber);

    if (isNaN(inputNumber) || inputNumber > 99 || inputNumber <= 0) {
      Alert.alert("Invalid number", "Please input a number between 1 and 99", [
        { text: "okay", onPress: resetInputHandler, style: "destructive" },
      ]);
      return;
    }
    onPickNumber(inputNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsLayout}>
        <View style={styles.buttonLayout}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonLayout}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
      </Card>
      </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1, 
    marginTop: 100,
    padding: 20,
    alignItems: "center"
  },
  
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsLayout: {
    flexDirection: "row",
  },
  buttonLayout: { flex: 1 },
});

export default StartGameScreen;
