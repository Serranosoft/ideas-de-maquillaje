import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowLeftIcon({ width, height, black }) {
    return (
        <Svg
            width={width || 32}
            height={height || 32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M15 7l-5 5 5 5"
                stroke={black ? "#000": "#d18ead"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default ArrowLeftIcon
