import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Stack } from "expo-router";
import { ui } from "../src/utils/styles";
import Title from "../src/layout/home/title";
import Header from "../src/components/header";
import Hero from "../src/layout/settings/hero";
import Menu from "../src/layout/settings/menu";

export default function List() {

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <Stack.Screen options={{ headerShown: false }} />
            <Header back />
            <Hero />
            <Menu />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        gap: 16,
        paddingTop: 24,
        paddingBottom: 60
    },

    title: {
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 24,
    },

    lottie: {
        width: "100%",
        aspectRatio: 1
    },

    list: {
        flex: 1,
        width: "100%",
    },

    itemWrapper: {
        flex: 1,
        height: 250,
        margin: 3,
    },

    item: {
        position: "relative",
        height: "100%",
    },

    info: {
        justifyContent: "center",
        alignItems: "center", 
        width: "100%",
        height: 75,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        paddingHorizontal: 4
    },

    image: {
        width: "100%",
        height: "100%",
    }
})