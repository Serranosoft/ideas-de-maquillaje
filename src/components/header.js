import { useNavigation, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Favorite from "./favorite";
import { ui } from "../utils/styles";
import MenuIcon from "../icons/menu";
import HappyFaceIcon from "../icons/happy-face";

export default function Header({ image, title  }) {

    const router = useRouter();

    const phrases = [
        "¡Hola!",
        "¿Qué tal?",
        "¿Cómo estás?",
        "¡Me alegro verte!",
        "¿Qué necesitas?",
    ]

    return (
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.item} onPress={() => router.navigate("/settings")}>
                    <MenuIcon  />
                </TouchableOpacity>

                <View style={[styles.item, { backgroundColor: "#fff" }]}>
                    <HappyFaceIcon width={40} height={40} />
                    <Text style={ui.h3}>{phrases[4/* Math.floor(Math.random() * phrases.length) */]}</Text>
                </View>
            </View>
            {/* <View style={styles.header}>
                <Pressable onPress={() => router.back()}>
                    <Image style={styles.img} source={require("../../assets/back.png")} />
                </Pressable>
                { title && <Text style={[ui.text, {color: "#fff"}]}>{title}</Text> }
                { image && <Favorite image={image} /> }
            </View> */}
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
        flexDirection: "row"
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