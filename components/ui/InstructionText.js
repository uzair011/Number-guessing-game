import { Text, StyleSheet } from "react-native"

import Colors from "../../constants/colors"

function InstructionText({ children }) {
    return (
        <Text style={styles.textInstruction}>{children}</Text>
 )   
}

export default InstructionText

const styles = StyleSheet.create({
    textInstruction: {
        fontSize: 22,
        color: Colors.accent500
      },
})