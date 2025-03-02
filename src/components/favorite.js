import { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DataContext, LangContext } from "../DataContext";
import { Alert, Platform, Pressable, StyleSheet, ToastAndroid, View } from "react-native";
import HeartRemoveIcon from "../icons/heart-remove";
import HeartAddIcon from "../icons/heart-add";

export default function Favorite({ image }) {

    const [isFavorite, setIsFavorite] = useState(false);
    const { favorites, setFavorites } = useContext(DataContext)
    const { language } = useContext(LangContext);

    // Al entrar, comprobar si es favorito o no.
    useEffect(() => {
        if (favorites) {
            setIsFavorite(favorites.includes(image));
        }
    }, [])

    // Agrega o elimina favoritos del estado
    async function handleFavorite() {
        if (!favorites.includes(image)) {
            setFavorites(favorites.concat(image))
            setIsFavorite(true);

            if (Platform.OS === "android") {
                ToastAndroid.showWithGravityAndOffset(language.t("_favoritesAdded"), ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            } else {
                Alert.alert(language.t("_favoritesAdded"));
            }
        } else {
            let favoritesAux = [...favorites];
            favoritesAux.splice(favoritesAux.indexOf(image), 1)
            setFavorites(favoritesAux);
            setIsFavorite(false);

            if (Platform.OS === "android") {
                ToastAndroid.showWithGravityAndOffset(language.t("_favoritesDeleted"), ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50);
            } else {
                Alert.alert(language.t("_favoritesDeleted"));
            }
        }
    }

    // Cada vez que el estado se actualiza, llama a saveFavorite
    useEffect(() => {
        saveFavorite();
    }, [favorites])

    // Reemplaza el contenido de favoritos del storage con el nuevo array
    async function saveFavorite() {
        await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }

    return (
        <Pressable onPressIn={handleFavorite}>
            <View style={styles.favoriteWrapper}>
                {isFavorite ? <HeartRemoveIcon /> : <HeartAddIcon />}
            </View>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    favoriteWrapper: {
        backgroundColor: "#F9D6E6",
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginRight: 4
    },
})