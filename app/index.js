import { ScrollView, StyleSheet, Text } from "react-native";
import { Stack } from "expo-router";
import { ui } from "../src/utils/styles";
import Title from "../src/layout/home/title";
import Header from "../src/components/header";
import Hero from "../src/layout/home/hero";
import Columns from "../src/layout/home/columns";
import Button from "../src/components/button";
import HeartIcon from "../src/icons/heart";
import Feedback from "../src/layout/home/feedback";

export default function List() {

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
        >
            <Stack.Screen options={{ headerShown: false }} />
            <Header home />
            <Title />
            <Hero />
            <Columns />
            <Button border>
                <HeartIcon
                    ball
                    width={24}
                    height={24}
                />
                <Text style={ui.h3}>Ver mis favoritos</Text>
            </Button>
            <Feedback />










            {/* <View style={styles.title}>
                <Text style={ui.h2}>Ideas de maquillaje para todas las temporadas</Text>
            </View>
            {
                categories.length > 0 ?
                    <View style={styles.list}>
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 16}}
                            data={categories}
                            numColumns={2}
                            initialNumToRender={6}
                            renderItem={({ item, i }) => {
                                return (
                                    <Animated.View key={i} style={styles.itemWrapper}>
                                        <Link asChild href={{ pathname: "/gallery", params: { name: item.name } }}>
                                            <Pressable onPress={() => setAdTrigger((adTrigger) => adTrigger + 1)}>
                                                <View style={styles.item}>
                                                    <Image transition={1000} style={styles.image} source={item.image} placeholder={"L8FOP=~UKOxt$mI9IAbGBQw[%MRk"} />
                                                    <View style={styles.info}>
                                                        <Text style={[ui.h3, ui.bold, { color: "#fff", textAlign: "center", fontWeight: "bold" }]}>{item.name}</Text>
                                                    </View>
                                                </View>
                                            </Pressable>
                                        </Link>
                                    </Animated.View>
                                )
                            }}
                        />
                    </View>
                    :
                    <LottieView source={require("../assets/lottie/loading-animation.json")} loop={true} autoPlay={true} />
            } */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContent: {
        gap: 16,
        paddingTop: 24,
        paddingBottom: 60
    },

    title: {
        alignItems: "center",
        gap: 6,
        paddingHorizontal: 24,
    },

    lottie: {
        width: "100%",
        aspectRatio: 1
    },

    list: {
        flex: 1,
        width: "100%",
    },

    itemWrapper: {
        flex: 1,
        height: 250,
        margin: 3,
    },

    item: {
        position: "relative",
        height: "100%",
    },

    info: {
        justifyContent: "center",
        alignItems: "center", 
        width: "100%",
        height: 75,
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.65)",
        paddingHorizontal: 4
    },

    image: {
        width: "100%",
        height: "100%",
    }
})