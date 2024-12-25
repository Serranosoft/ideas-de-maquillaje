import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../../icons/arrow-right";
import { ui } from "../../utils/styles";
import { categories } from "../../utils/data";
import { Link } from "expo-router";

export default function Columns() {

    return (
        <View style={styles.container}>
            {
                categories.slice(1).map((item) => {
                    return (
                        <Link asChild href={{ pathname: "/submenu", params: { category: item.name, subcategories: JSON.stringify(item.subcategories) } }}>
                            <TouchableOpacity style={{ width: "47%" }}>
                                <ImageBackground
                                    source={{ uri: item.image }}
                                    style={styles.item}
                                    imageStyle={{ borderRadius: 8 }}
                                >
                                    <View style={styles.wrapper}>
                                        <Text style={ui.h4}>{item.name}</Text>
                                        <ArrowRightIcon width={24} height={24} black />
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Link>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
    },
    item: {
        height: 150,
        justifyContent: "flex-end",
        borderRadius: 16
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
        gap: 8,
        paddingHorizontal: 8
    },
})