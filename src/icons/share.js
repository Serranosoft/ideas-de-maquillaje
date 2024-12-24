import * as React from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Path } from "react-native-svg"

function ShareIcon({ width, height, ball, black }) {
    return (
        <View style={ball && styles.container}>


            <Svg
                width={width || 32}
                height={height || 32}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.5 2.25a3.25 3.25 0 00-3.2 3.824L8.57 9.386a.757.757 0 00-.068.053 3.25 3.25 0 100 5.121.755.755 0 00.068.054l4.73 3.312a3.25 3.25 0 10.617-1.4l-4.479-3.135c.2-.422.312-.893.312-1.391s-.112-.97-.312-1.391l4.48-3.136A3.25 3.25 0 1016.5 2.25zM14.75 5.5a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM6.5 10.25a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5zm10 6.5a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z"
                    fill={black ? "#000" : "#d18ead"}
                />
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "flex-start",
        padding: 8,
        backgroundColor: "#F9D6E6",
        borderRadius: 100,
    }
})
export default ShareIcon
