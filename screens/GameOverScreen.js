import { View, Image, Text, StyleSheet, Dimensions } from "react-native"

import Colors  from "../constants/colors"
import Title from "../components/ui/Title"
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreeen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/images/success.png")} style={styles.image} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess
                the number <Text style={styles.highlight}>{ userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreeen

const deviceWidth = Dimensions.get("window").width


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent:"center"
    },
    imageContainer: {
        height: deviceWidth < 380 ? 150 : 300,
        width: deviceWidth < 380 ? 150 : 300, 
        borderRadius: deviceWidth < 380 ? 75 : 150,  
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
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24

    },
    highlight: {
        fontFamily: "open-sans-bold",
        color: Colors.primary800
    }

})