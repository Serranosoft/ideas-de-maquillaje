import { Text, View } from "react-native";
import { ui } from "../../utils/styles";

export default function Title() {
    return (
        <View>
            <Text style={ui.h1}>Ideas de maquillaje para todas las temporadas</Text>
        </View>
    )
}