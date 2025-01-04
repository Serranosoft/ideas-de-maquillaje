import { FlatList, StyleSheet, View } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import LottieView from 'lottie-react-native';
import { useContext, useEffect, useState } from "react";
import { Pressable } from "react-native";
import { Image } from "expo-image";
import Header from "../src/components/header";
import { scheduleWeeklyNotification } from "../src/utils/notifications";
import { DataContext } from "../src/DataContext";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../src/utils/constants";

export default function gallery() {

    const params = useLocalSearchParams();
    const { subcategory, tag } = params;
    const [images, setImages] = useState([]);
    const { setAdTrigger } = useContext(DataContext);

    useEffect(() => {
        getImages();
        scheduleWeeklyNotification();
    }, [])

    async function getImages() {
        const response = await fetch(`https://res.cloudinary.com/dadujos6v/image/list/${tag}.json`)
        .then((response) => response.json())
        .then(data => data);

        let images = [];
        const sorted = response.resources.sort((a, b) => {
            if (a["public_id"] > b["public_id"]) {
                return 1;
            } else {
                return -1
            }
        })

        sorted.forEach((image) => {
            images.push("https://res.cloudinary.com/dadujos6v/image/upload/" + image["public_id"]);
        })

        setImages(images);
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <Header title={subcategory} back />
            
            <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
            {
                images.length > 0 ?
                    <View style={styles.list}>
                        <FlatList
                            data={images}
                            numColumns={2}
                            initialNumToRender={8}
                            renderItem={({ item, i }) => {
                                return (
                                    <View key={i} style={styles.itemWrapper}>
                                        <Link asChild href={{ pathname: "/image", params: { image: item } }}>
                                            <Pressable style={styles.item} onPress={() => {
                                                setAdTrigger((adTrigger) => adTrigger + 1);
                                            }}>
                                                <Image transition={1000} style={styles.image} source={item} placeholder={"L8FOP=~UKOxt$mI9IAbGBQw[%MRk"} /* contentFit="contain" */ />
                                            </Pressable>
                                        </Link>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    :
                    <LottieView source={require("../assets/lottie/loading-animation.json")} loop={true} autoPlay={true} />

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 24,
        paddingBottom: 24
    },

    title: {
        gap: 2,
    },
    list: {
        flex: 1,
        width: "100%",
    },

    itemWrapper: {
        flex: 1,
        height: 250,
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