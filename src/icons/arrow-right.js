import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowRightIcon = ({ width, height, black }) => (
    <Svg
        width={width || 32}
        height={height || 32}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            stroke={black ? "#000": "#d18ead"}
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)
export default ArrowRightIcon
