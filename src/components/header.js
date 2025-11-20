import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Favorite from "./favorite";
import { ui } from "../utils/styles";
import MenuIcon from "../icons/menu";
import HappyFaceIcon from "../icons/happy-face";
import ArrowLeftIcon from "../icons/arrow-left";
import { useContext } from "react";
import { LangContext } from "../DataContext";

export default function Header({ 
    title, 
    back, 
    home, 
    favorite
}) {

    const router = useRouter();
    const { language } = useContext(LangContext);

    const phrases = [
        language.t("_headerPhrase1"),
        language.t("_headerPhrase2"),
        language.t("_headerPhrase3"),
        language.t("_headerPhrase4"),
        language.t("_headerPhrase5"),
    ]

    return (
        <>
            <View style={styles.header}>
                {
                    back ?
                        <TouchableOpacity style={styles.item} onPress={() => router.back()}>
                            <ArrowLeftIcon  />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.item} onPress={() => router.navigate("/settings")}>
                            <MenuIcon  />
                        </TouchableOpacity>
                }
                {
                    title && <Text style={ui.h3}>{title}</Text>
                }
                {
                    favorite && <Favorite image={favorite} />
                }
                {
                    home && 
                        <View style={[styles.item, { backgroundColor: "#fff" }]}>
                            <HappyFaceIcon width={40} height={40} />
                            <Text style={ui.h3}>{phrases[Math.floor(Math.random() * phrases.length)]}</Text>
                        </View>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        flexDirection: "row",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#F9D6E6",
        borderRadius: 100,
    },
    /* header: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        backgroundColor: "#5B1A23",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
    }, */
    group: {
        justifyContent: "center",
    },
    img: {
        width: 30,
        height: 30,
    }

})