import { StyleSheet, Text, View } from "react-native"
import { ui } from "../../utils/styles"
import { useContext } from "react";
import { LangContext } from "../../DataContext";

export default function Feedback() {

    const { language } = useContext(LangContext);

    return (
        <View style={styles.container}>
            <Text style={[ui.h2, ui.center]}>{language.t("_feedbackPhrase1")}</Text>
            <Text style={[ui.h4, ui.center]}>{language.t("_feedbackPhrase2")}</Text>
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