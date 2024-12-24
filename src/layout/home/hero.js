import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../../icons/arrow-right";
import { ui } from "../../utils/styles";
import { categories } from "../../utils/data";

export default function Hero() {

    return (
        <TouchableOpacity >
            <ImageBackground
                source={{ uri: categories[0].image }}
                imageStyle={{ borderRadius: 20 }}
                style={styles.container}
            >
                <View style={styles.wrapper}>
                    <Text style={ui.h3}>{categories[0].name}</Text>
                    <ArrowRightIcon width={32} height={32} black />
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        justifyContent: "flex-end",
        borderRadius: 24,
        marginTop: 8,
    },

    wrapper: {
        padding: 8,
        margin: 8,
        justifyContent: "space-between",
        backgroundColor: "rgba(249, 214, 230, 0.85)",
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        paddingHorizontal: 16
    },
})