import { Link, Stack, useLocalSearchParams } from "expo-router";
import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../src/icons/arrow-right";
import { ui } from "../src/utils/styles";
import Header from "../src/components/header";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../src/utils/constants";
import { useContext } from "react";
import { DataContext } from "../src/DataContext";

export default function submenu() {

    const { setAdTrigger, adsLoaded } = useContext(DataContext);
    const params = useLocalSearchParams();
    const { category, original, subcategories } = params;

    return (
        <>
            { adsLoaded && <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} /> }
            <View style={styles.container}>
                <Stack.Screen options={{ headerShown: false }} />
                <Header title={category} back />
                <FlatList
                    numColumns={2}
                    data={JSON.parse(subcategories)}
                    contentContainerStyle={styles.columns}
                    columnWrapperStyle={styles.columns}
                    renderItem={({ item }) => {
                        return (
                            <Link asChild href={{ pathname: "/gallery", params: { subcategory: item.name, tag: `${original.toLowerCase().split(' ').join("-")}-${item.original.toLowerCase().split(' ').join("-")}` } }}>
                                <TouchableOpacity style={{ flex: 1 }} onPress={() => setAdTrigger((adTrigger) => adTrigger + 1)}>
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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
    },

    columns: {
        gap: 16
    },
    item: {
        height: 250,
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