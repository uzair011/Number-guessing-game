import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.accent200,
    padding: 12,
    borderColor: Colors.accent200,
    borderWidth: 2,
    textAlign: "center",
    borderRadius: 15,
  },
});
