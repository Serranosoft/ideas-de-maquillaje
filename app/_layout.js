import { SplashScreen, Stack, router } from "expo-router";
import { View, StatusBar, StyleSheet, Image, Pressable, AppState } from "react-native";
import { createRef, useEffect, useRef, useState } from "react";
import { useFonts } from "expo-font";
import { DataContext } from "../src/DataContext";
import { ui } from "../src/utils/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from 'expo-notifications';
import AdsHandler from "../src/components/AdsHandler";

import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();
export default function Layout() {

    // Carga de fuentes.
    const [fontsLoaded] = useFonts({
        "Regular": require("../assets/fonts/Reckless/Regular.ttf"),
        "Medium": require("../assets/fonts/Reckless/Medium.ttf"),
        "Semibold": require("../assets/fonts/Reckless/SemiBold.ttf"),
        "Bold": require("../assets/fonts/Reckless/Bold.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    
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
    const [showOpenAd, setShowOpenAd] = useState(true);
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
            <AdsHandler ref={adsHandlerRef} showOpenAd={showOpenAd} setShowOpenAd={setShowOpenAd} />
            <DataContext.Provider value={{ favorites: favorites, setFavorites: setFavorites, setAdTrigger: setAdTrigger, setShowOpenAd: setShowOpenAd }}>
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