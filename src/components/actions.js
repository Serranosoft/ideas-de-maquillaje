import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import { useContext } from "react";
import PinchIcon from "../icons/pinch";
import DoubleTapIcon from "./double-tap";
import { ui } from "../utils/styles";
import { LangContext } from "../DataContext";

export default function Actions() {

    const { language } = useContext(LangContext);

    return (
        <View style={styles.container}>
            <View style={styles.action}>
                <View style={styles.icon}>
                    <PinchIcon />
                </View>
                <Text style={ui.muted}>{language.t("_actionsPinch")}</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.icon}>
                    <DoubleTapIcon />
                </View>
                <Text style={ui.muted}>{language.t("_actionsTap")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-end",
        gap: 4,
    },
    
    action: {
        paddingHorizontal: 3,
        paddingRight: 6,
        paddingVertical: 3,
        borderRadius: 16,
        backgroundColor: "#F0EFF6",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    icon: {
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})