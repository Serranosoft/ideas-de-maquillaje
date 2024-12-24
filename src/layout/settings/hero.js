import { StyleSheet, View } from "react-native";
import ProfileIcon from "../../icons/profile";

export default function Hero() {

    return (
        <View style={styles.container}>
            <ProfileIcon />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 16,
        marginBottom: 56,
    }
})