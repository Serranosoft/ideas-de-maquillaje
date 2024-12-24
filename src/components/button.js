import { StyleSheet, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../icons/arrow-right";

export default function Button({ evt, children, border }) {

    return (
        <TouchableOpacity
            onPress={evt}
            style={[styles.container, border && styles.border]}
        >
            <View style={styles.row}>
                {children}
            </View>
            <ArrowRightIcon width={32} height={32} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    row: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    border: {
        padding: 4,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#F9D6E6"
    }
})