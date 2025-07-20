import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { ui } from "../src/utils/styles";
import Title from "../src/layout/home/title";
import Header from "../src/components/header";
import Hero from "../src/layout/home/hero";
import Columns from "../src/layout/home/columns";
import Button from "../src/components/button";
import HeartIcon from "../src/icons/heart";
import Feedback from "../src/layout/home/feedback";
import { useContext } from "react";
import { DataContext, LangContext } from "../src/DataContext";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../src/utils/constants";

export default function List() {

    const router = useRouter();
    const { language } = useContext(LangContext);
    const { adsLoaded } = useContext(DataContext);

    return (
        <>
            { adsLoaded && <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} /> }
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                <Stack.Screen options={{ headerShown: false }} />
                <Header home />
                <Title />
                    <Hero />
                    <Columns />
                <Button border evt={() => router.navigate("/favorites")}>
                    <HeartIcon
                        ball
                        width={24}
                        height={24}
                    />
                    <Text style={ui.h3}>{language.t("_homeFavorites")}</Text>
                </Button>
                <Feedback />

            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        gap: 16,
        paddingTop: 16,
        paddingBottom: 60,
        paddingHorizontal: 16
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