import { View, Image, Text, StyleSheet } from "react-native"

import Colors  from "../constants/colors"
import Title from "../components/ui/Title"

function GameOverScreeen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/images/success.png")} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess
                the number <Text style={styles.highlight}>Y</Text></Text>
        </View>
    )
}

export default GameOverScreeen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent:"center"
    },
    imageContainer: {
        height: 300,
        width: 300, 
        borderRadius: 150, 
        borderWidth: 3,
        borderColor: Colors.accent700,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: "100%",
        height: "100%"
    },
    summaryText: {
        fontFamily: "open-sans"
    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary800
    }

})