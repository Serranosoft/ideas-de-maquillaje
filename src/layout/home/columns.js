import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRightIcon from "../../icons/arrow-right";
import { ui } from "../../utils/styles";

const Data = [
    {
        name: "Tutoriales",
        image: "https://res.cloudinary.com/dadujos6v/image/upload/v1705949211/maquillaje/ykgfsofvrhjeh89hufxs.jpg",
    },
    {
        name: "Consejos",
        image: "https://res.cloudinary.com/dadujos6v/image/upload/v1705949298/maquillaje/uijeqaepqmt2y6nkeim4.jpg",
    },
    {
        name: "Cuidados",
        image: "https://res.cloudinary.com/dadujos6v/image/upload/v1705949298/maquillaje/yzzhsl9vagwivoeslow2.jpg",
    },
    {
        name: "Inspiración",
        image: "https://res.cloudinary.com/dadujos6v/image/upload/v1705949300/maquillaje/dyiedovrkq8ikwzmdtsy.jpg",
    }

]
export default function Columns() {

    return (
        <FlatList
            numColumns={2}
            data={Data}
            style={styles.flatlist}
            contentContainerStyle={styles.columns}
            columnWrapperStyle={styles.columns}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity style={{ flex: 1 }}>
                        <ImageBackground
                            source={{ uri: item.image }}
                            style={styles.container}
                            imageStyle={{ borderRadius: 8 }}
                        >
                            <View style={styles.wrapper}>
                                <Text style={ui.h4}>{item.name}</Text>
                                <ArrowRightIcon width={24} height={24} black />
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )
            }}
        >
        </FlatList>
    )
}

const styles = StyleSheet.create({
    flatlist: {
        marginBottom: 16
    },
    columns: {
        gap: 16
    },
    container: {
        height: 150,
        justifyContent: "flex-end",
        borderRadius: 16
    },
    wrapper: {
        padding: 8,
        margin: 8,
        justifyContent: "space-between",
        backgroundColor: "rgba(249, 214, 230, 0.85)",
        borderRadius: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        paddingHorizontal: 8
    },
})