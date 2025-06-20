import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HeartAddIcon({ width, height, black }) {
    return (
        <Svg
            width={width || 32}
            height={height || 32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M22 17.2c0 .9-.25 1.75-.7 2.47A4.768 4.768 0 0117.2 22c-1.75 0-3.28-.94-4.1-2.33-.44-.72-.7-1.57-.7-2.47a4.801 4.801 0 019.6 0z"
                stroke={black ? "#000" : "#d18ead"}
                strokeWidth={2}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M15.33 17.2l1.18 1.18 2.56-2.36"
                stroke={black ? "#000" : "#d18ead"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M22 8.69c0 1.97-.51 3.71-1.31 5.22a4.794 4.794 0 00-3.49-1.51c-2.65 0-4.8 2.15-4.8 4.8 0 1.23.47 2.35 1.23 3.2-.37.17-.71.31-1.01.41-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.81 0 3.43.88 4.44 2.23a5.549 5.549 0 014.44-2.23C19.51 3.1 22 5.6 22 8.69z"
                stroke={black ? "#000" : "#d18ead"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default HeartAddIcon
