import { Text, View } from "react-native";
import { ui } from "../../utils/styles";

export default function Title() {
    return (
        <View>
            <Text style={ui.h1}>{language.t("_homeTitle")}</Text>
        </View>
    )
}