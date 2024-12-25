import { SplashScreen, Stack, router } from "expo-router";
import { View, StatusBar, StyleSheet, Image, Pressable, AppState } from "react-native";
import { createRef, useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { DataContext } from "../src/DataContext";
import { ui } from "../src/utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import AdsHandler from "../src/components/AdsHandler";
import { AdEventType, AppOpenAd, TestIds } from "react-native-google-mobile-ads";
import { loadId } from "../src/utils/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();
export default function Layout() {

    const [OPEN_AD, SET_OPEN_ADD] = useState(null);
    const [OPEN_AD_LOADED, SET_OPEN_ADD_LOADED] = useState(false);
    const [OPEN_AD_SHOWED, SET_OPEN_ADD_SHOWED] = useState(false);

    // Petición de anuncio durante la carga
    useEffect(() => {
        const appOpenAd = AppOpenAd.createForAdRequest(TestIds.APP_OPEN);
        SET_OPEN_ADD(appOpenAd)
        appOpenAd.load();

        appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
            SET_OPEN_ADD_LOADED(true)
        });
        appOpenAd.addAdEventListener(AdEventType.CLOSED, () => {
            SET_OPEN_ADD_SHOWED(true)
        });
        appOpenAd.addAdEventListener(AdEventType.ERROR, () => {
            SET_OPEN_ADD_SHOWED(true)
        });
    }, [])

    // Carga de fuentes.
    const [fontsLoaded] = useFonts({
        "Regular": require("../assets/fonts/Reckless/Regular.ttf"),
        "Medium": require("../assets/fonts/Reckless/Medium.ttf"),
        "Semibold": require("../assets/fonts/Reckless/SemiBold.ttf"),
        "Bold": require("../assets/fonts/Reckless/Bold.ttf"),
    });


    useEffect(() => {
        if (!OPEN_AD_SHOWED && OPEN_AD_LOADED) {
            OPEN_AD.show();
        }
        if (fontsLoaded && OPEN_AD_SHOWED) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, OPEN_AD_LOADED, OPEN_AD_SHOWED])

    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        async function getFavorites() {
            const value = await AsyncStorage.getItem("favorites");
            if (value !== null) {
                setFavorites(JSON.parse(value));
            }
        }
        getFavorites();
    }, [])

    // Gestión de notificaciones
    useEffect(() => {
        Notifications.setNotificationHandler({
            handleNotification: async () => ({
                shouldShowAlert: true,
                shouldPlaySound: false,
                shouldSetBadge: false,
            }),
        });
    }, [])

    // Gestión de anuncios
    const [adTrigger, setAdTrigger] = useState(0);
    const adsHandlerRef = createRef();

    useEffect(() => {
        if (adTrigger > 4) {
            adsHandlerRef.current.showIntersitialAd();
            setAdTrigger(0);
        }
    }, [adTrigger])





    // Esperar hasta que las fuentes se carguen
    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <AdsHandler ref={adsHandlerRef} adType={[0]} />
            <DataContext.Provider value={{ favorites: favorites, setFavorites: setFavorites, setAdTrigger: setAdTrigger }}>
                <GestureHandlerRootView style={styles.wrapper}>
                    <Stack />
                </GestureHandlerRootView>
            </DataContext.Provider>
            <StatusBar style="light" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 16,
        backgroundColor: "#fff"
    },
    wrapper: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
    },
})