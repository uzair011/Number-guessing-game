import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

// game logic
function generateRandomNumberBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber,onGameOver }) {
  const initialGuess = generateRandomNumberBetween(
    1,
    100 ,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
      }
    },[currentGuess, userNumber, onGameOver ])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know this is wrong!!!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction == "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    console.log(minBoundry, maxBoundry);
    const newRandomNumber = generateRandomNumberBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.screen}>
      {<Title>Opponent's Screen </Title>}

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.InstructionText}>Higher or Lower</InstructionText>
        <View style={styles.buttonsLayout}>
          <View style={styles.buttonLayout}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="add-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonLayout}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>Logs</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsLayout: {
    flexDirection: "row",
  },
  buttonLayout: {
    flex: 1
  },
  InstructionText: {
    marginBottom: 12
  }
});
