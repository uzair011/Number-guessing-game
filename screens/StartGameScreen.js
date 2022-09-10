import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: "#05313d",
    borderRadius: 8,
    elevation: 4, // android only => box shadow
    shadowColor: "#05313d",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#9BACB1",
    borderBottomWidth: 2,
    color: "#9BACB1",
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
