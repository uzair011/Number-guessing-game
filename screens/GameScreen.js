import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's guess</Text>
      {/* guess */}
      <View>
        <Text>Higher or Lower</Text>
        {/* + or - */}
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
  title: { fontSize: 18, fontWeight: "bold", color: "#999999" },
});
