import { View, Text, StyleSheet, Platform } from "react-native";
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
    fontFamily: 'open-sans-bold',
    fontSize: 30,
    color: Colors.accent200,
    padding: 12,
    borderColor: Colors.accent200,
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    textAlign: "center",
    borderRadius: 12,
    maxWidth: "80%",
    width: 300,
    
  },
});
