import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, ToastAndroid, View, TouchableOpacity } from "react-native";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";
import { bannerId } from "../src/utils/constants";
import Header from "../src/components/header";
import { ImageZoom } from '@likashefqet/react-native-image-zoom';
import Actions from "../src/components/actions";
import DownloadIcon from "../src/icons/download";

export default function ImageWrapper() {

    const params = useLocalSearchParams();
    const { image } = params;
    const imageName = image.substring(image.lastIndexOf("/") + 1, image.length);

    async function requestPermissions() {
        try {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status === "granted") {
                downloadImage();
            } else {
                ToastAndroid.showWithGravityAndOffset(
                    language.t("_imagePermissions"),
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                );
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function downloadImage() {
        try {
            const { uri } = await FileSystem.downloadAsync(image, FileSystem.documentDirectory + `${imageName}.jpg`);
            // Agregar la imagen al álbum
            const asset = await MediaLibrary.createAssetAsync(uri);

            // Obtener el álbum existente o crearlo
            let album = await MediaLibrary.getAlbumAsync(language.t("_imageAlbumName"));
            if (!album) {
                album = await MediaLibrary.createAlbumAsync(language.t("_imageAlbumName"), asset, true);
            } else {
                await MediaLibrary.addAssetsToAlbumAsync([asset], album, true);
            }

            ToastAndroid.showWithGravityAndOffset(
                language.t("_imageSaved"),
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );


        } catch (error) {
            console.log(error);
        }
    }

    return (

        <>
            <View
                style={styles.container}
            >
                <Stack.Screen options={{ headerShown: false }} />
                <Header back favorite={image} />
                <BannerAd unitId={bannerId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} requestOptions={{}} />
                <View style={styles.wrapper}>
                    <ImageZoom
                        onResetAnimationEnd={false}
                        minScale={1}
                        maxScale={3}
                        uri={image}
                        isDoubleTapEnabled
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TouchableOpacity style={styles.download} onPress={requestPermissions}>
                        <DownloadIcon />
                    </TouchableOpacity>
                    <Actions />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 8,
        paddingTop: 24,
        paddingBottom: 16,
        position: "relative"
    },

    wrapper: {
        width: "100%",
        flex: 1,
    },

    download: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#F9D6E6",
        borderRadius: 100,
    }
})