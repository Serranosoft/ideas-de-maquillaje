import { Linking, Share, StyleSheet, Text, View } from "react-native";
import Button from "../../components/button";
import HeartIcon from "../../icons/heart";
import { ui } from "../../utils/styles";
import { useRouter } from "expo-router";
import * as StoreReview from 'expo-store-review';
import LanguageIcon from "../../icons/language";
import ShareIcon from "../../icons/share";
import StarIcon from "../../icons/star";
import { useContext, useState } from "react";
import { DataContext } from "../../DataContext";
import LanguageModal from "./language-modal";

export default function Menu() {

    const router = useRouter();
    const { setShowOpenAd } = useContext(DataContext);

    const [langModal, setLangModal] = useState(false);

    async function share() {
        const url = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US';
        try {
            setShowOpenAd(false);
            await Share.share({ message: (language.t("_menuShareMessage") + '\n' + url) });
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
            <Button border evt={() => setLangModal(!langModal)}>
                <LanguageIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>{language.t("_menuChangeLanguage")}</Text>
                <LanguageModal {...{ langModal, setLangModal }} />
            </Button>
            <Button border evt={() => router.navigate("/favorites")}>
                <HeartIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>{language.t("_favoritesTitle")}</Text>
            </Button>
            <Button border evt={() => share()}>
                <ShareIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>{language.t("_menuShareWithFriends")}</Text>
            </Button>
            <Button border evt={() => requestReview()}>
                <StarIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>{language.t("_menuReviewApp")}</Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 24
    }
})