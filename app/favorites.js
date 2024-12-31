import { Link, Stack } from "expo-router"
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native"
import Header from "../src/components/header"
import { useContext, useEffect, useState } from "react"
import { DataContext, LangContext } from "../src/DataContext"
import { Image } from "expo-image";

export default function Favorites() {

    // Debo obtener todos los favoritos
    const { favorites } = useContext(DataContext);
    const { language } = useContext(LangContext);
    const [favoriteImages, setFavoriteImages] = useState([])

    useEffect(() => {
        setFavoriteImages([...favorites])
    }, [])

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title={language.t("_favoritesTitle")} back />
            {
                favoriteImages.length > 0 ?
                        <FlatList
                            data={favoriteImages}
                            numColumns={2}
                            renderItem={({ item, i }) => {
                                return (
                                    <View key={i} style={styles.itemWrapper}>
                                        <Link asChild href={{ pathname: "/image", params: { image: item } }}>
                                            <Pressable style={styles.item}>
                                                <Image transition={1000} style={styles.image} source={item} placeholder={"L8FOP=~UKOxt$mI9IAbGBQw[%MRk"} />
                                            </Pressable>
                                        </Link>
                                    </View>
                                )
                            }}
                        />
                    :
                    <Text style={{ fontSize: 27, textAlign: "center" }}>{language.t("_favoritesEmptyMessage")}</Text>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor: "#fff",
    },

    itemWrapper: {
        flex: 1,
        height: 200,
        margin: 5,
    },

    item: {
        position: "relative",
        height: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
    }
})