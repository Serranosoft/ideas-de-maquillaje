import { Linking, Share, StyleSheet, Text, View } from "react-native";
import Button from "../../components/button";
import HeartIcon from "../../icons/heart";
import { ui } from "../../utils/styles";
import { useRouter } from "expo-router";
import * as StoreReview from 'expo-store-review';
import LanguageIcon from "../../icons/language";
import ShareIcon from "../../icons/share";
import StarIcon from "../../icons/star";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

export default function Menu() {

    const router = useRouter();

    const { setShowOpenAd } = useContext(DataContext);

    const url = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US';
    async function share() {
        try {
            setShowOpenAd(false);
            await Share.share({ message: ('Tutoriales e Ideas de Maquillaje 💫 | Tu app de belleza 🎀' + '\n' + url) });
        } catch (error) {
            alert(error.message);
        }
    }

    async function requestReview() {
        if (await StoreReview.hasAction()) {
            setShowOpenAd(false);
            StoreReview.requestReview()
        }
    }

    return (
        <View style={styles.container}>
            <Button border>
                <LanguageIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>Cambiar idioma</Text>
            </Button>
            <Button border evt={() => router.navigate("/favorites")}>
                <HeartIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>Mis favoritos</Text>
            </Button>
            <Button border evt={() => share()}>
                <ShareIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>Compartir con amigos</Text>
            </Button>
            <Button border evt={() => requestReview()}>
                <StarIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>Puntuar aplicación</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 24
    }
})