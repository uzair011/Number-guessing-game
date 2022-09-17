import { View, StyleSheet, Dimensions } from "react-native"

import Colors from "../../constants/colors"


function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    )
}

export default Card

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
    card: {
        marginTop: deviceWidth > 380 ? 18 : 36,
        padding: 16,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android only => box shadow
        shadowColor: "balck",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 6,
        justifyContent: "center",
        alignItems: "center",
      },
})