import { SplashScreen, Stack } from "expo-router";
import { View, StatusBar, StyleSheet, AppState } from "react-native";
import { createRef, useEffect, useState } from "react";
import { DataContext, LangContext } from "../src/DataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AdsHandler from "../src/components/AdsHandler";
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js'
import { translations } from "../src/utils/localizations";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as StoreReview from 'expo-store-review';
import { userPreferences } from "../src/utils/userPreferences";
import * as Notifications from 'expo-notifications';
import { scheduleWeeklyNotification } from "../src/utils/notifications";

export default function Layout() {
    // Idioma
    const [langRdy, setLangRdy] = useState(false);
    const [language, setLanguage] = useState(getLocales()[0].languageCode);
    const i18n = new I18n(translations);
    if (language) i18n.locale = language;
    i18n.enableFallback = true
    i18n.defaultLocale = "es";

    // Gestión de anuncios
    const [adsLoaded, setAdsLoaded] = useState(false);
    const [adTrigger, setAdTrigger] = useState(0);
    const [showOpenAd, setShowOpenAd] = useState(true);
    const adsHandlerRef = createRef();

    // APP
    const [favorites, setFavorites] = useState([]);

    // Cargar base de datos, preferencias de usuario y notificaciones
    useEffect(() => {
        getFavorites();
        getUserPreferences();
        configureNotifications();
    }, [])

    // Al terminar de configurar el idioma se lanza notificación
    useEffect(() => {
        if (langRdy) {
            scheduleWeeklyNotification(i18n);
        }
    }, [language, langRdy])

    /* useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]) */


    useEffect(() => {
        if (adTrigger > 3) {
            askForReview();
            setShowOpenAd(false);
        }

        if (adsLoaded) {
            if (adTrigger > 4) {
                adsHandlerRef.current.showIntersitialAd();
                setAdTrigger(0);
            }
        }

    }, [adTrigger])

    async function getUserPreferences() {
        const language = await AsyncStorage.getItem(userPreferences.LANGUAGE);
        setLanguage(language || getLocales()[0].languageCode);
        setLangRdy(true);
    }

    async function configureNotifications() {
        const { granted } = await Notifications.requestPermissionsAsync();
        if (granted) {
            await AsyncStorage.setItem(userPreferences.NOTIFICATION_PERMISSION, "true");
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowBanner: true,
                    shouldShowList: true,
                    shouldPlaySound: false,
                    shouldSetBadge: false,
                }),
            });
        } else {
            await AsyncStorage.setItem(userPreferences.NOTIFICATION_PERMISSION, "false");
        }
    }

    async function getFavorites() {
        const value = await AsyncStorage.getItem("favorites");
        if (value !== null) {
            setFavorites(JSON.parse(value));
        }
    }

    async function askForReview() {
        try {
            if (AppState.currentState !== "active") return;
            if (await StoreReview.hasAction()) {
                StoreReview.requestReview()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <AdsHandler ref={adsHandlerRef} showOpenAd={showOpenAd} adsLoaded={adsLoaded} setAdsLoaded={setAdsLoaded} setShowOpenAd={setShowOpenAd} />
            <DataContext.Provider value={{ favorites: favorites, setFavorites: setFavorites, adsLoaded: adsLoaded, setAdTrigger: setAdTrigger, setShowOpenAd: setShowOpenAd }}>
                <LangContext.Provider value={{ language: i18n, setLanguage }}>
                    <GestureHandlerRootView style={styles.wrapper}>
                        <Stack />
                    </GestureHandlerRootView>
                </LangContext.Provider>
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
        backgroundColor: "#fff"
    },
    wrapper: {
        flex: 1,
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
    },
})