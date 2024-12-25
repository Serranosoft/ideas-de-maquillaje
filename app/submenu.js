import { Link, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../src/icons/arrow-right";
import { ui } from "../src/utils/styles";
import Header from "../src/components/header";

export default function submenu() {

    const params = useLocalSearchParams();
    const { category, subcategories } = params;

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title={category} back />

            <FlatList
                numColumns={2}
                data={JSON.parse(subcategories)}
                style={styles.flatlist}
                contentContainerStyle={styles.columns}
                columnWrapperStyle={styles.columns}
                renderItem={({ item }) => {
                    return (
                        <Link asChild href={{ pathname: "/gallery", params: { subcategory: item.name, tag: `${category.toLowerCase().split(' ').join("-")}-${item.name.toLowerCase().split(' ').join("-")}` } }}>
                            <TouchableOpacity style={{ flex: 1 }}>
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
                }}
            >
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingBottom: 60,
        backgroundColor: "#fff",
    },
    flatlist: {
        paddingTop: 32,
        paddingBottom: 16
    },
    columns: {
        gap: 16
    },
    item: {
        height: 200,
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