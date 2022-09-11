import { Text, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

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

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomNumberBetween(
    minBoundry,
    maxBoundry,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

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
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      {/* <View>Logs</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 24,
  },
});
