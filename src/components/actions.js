import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
// import { LangContext } from "../../utils/LangContext";
import { useContext } from "react";
import PinchIcon from "../icons/pinch";
import DoubleTapIcon from "./double-tap";
import { ui } from "../utils/styles";

export default function Actions() {

    // const { language } = useContext(LangContext);

    return (
        <View style={styles.container}>
            <View style={styles.action}>
                <View style={styles.icon}>
                    <PinchIcon />
                </View>
                <Text style={ui.muted}>Arrastrar (Zoom)</Text>
            </View>
            <View style={styles.action}>
                <View style={styles.icon}>
                    <DoubleTapIcon />
                </View>
                <Text style={ui.muted}>Doble pulsación (Zoom)</Text>
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