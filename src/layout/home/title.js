import { Text, View } from "react-native";
import { ui } from "../../utils/styles";
import { useContext } from "react";
import { LangContext } from "../../DataContext";

export default function Title() {

    const { language } = useContext(LangContext);


    return (
        <View>
            <Text style={ui.h1}>{language.t("_homeTitle")}</Text>
        </View>
    )
}