import { StyleSheet, Text, View } from "react-native"
import { ui } from "../../utils/styles"

export default function Feedback() {
    return (
        <View style={styles.container}>
            <Text style={[ui.h2, ui.center]}>🎀 ¿Te gusta la app? 🎀</Text>
            <Text style={[ui.h4, ui.center]}>Dame una puntuación en la Play Store para ayudarme a seguir mejorando 🌈🌈</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 16,
        paddingBottom: 60,
        paddingTop: 32,
        alignItems: "center",
    }
})