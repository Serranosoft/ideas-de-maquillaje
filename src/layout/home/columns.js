import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../../icons/arrow-right";
import { ui } from "../../utils/styles";
import { categories } from "../../utils/data";
import { Link } from "expo-router";


export default function Columns() {


    return (
        <FlatList
            numColumns={2}
            data={categories.slice(1)}
            style={styles.flatlist}
            contentContainerStyle={styles.columns}
            columnWrapperStyle={styles.columns}
            renderItem={({ item }) => {
                return (
                    <Link asChild href={{ pathname: "/gallery", params: { name: item.name } }}>
                        <TouchableOpacity style={{ flex: 1 }}>
                            <ImageBackground
                                source={{ uri: item.image }}
                                style={styles.container}
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
            }}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    flatlist: {
        marginBottom: 16
    },
    columns: {
        gap: 16
    },
    container: {
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