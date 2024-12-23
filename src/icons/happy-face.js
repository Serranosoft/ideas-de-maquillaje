import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function HappyFaceIcon({ width, height }) {
    return (
        <Svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={width || 32}
            height={height || 32}
            fill="none"
        >
            <Circle cx={12.867} cy={12} r={7} stroke="#d18ead" strokeWidth={1.5} />
            <Path
                stroke="#d18ead"
                strokeLinecap="round"
                d="M15.867 14.147l-.048.04a4.631 4.631 0 01-5.952-.04"
            />
            <Path
                fill="#d18ead"
                d="M9.792 9.65c.042.042.11.042.151 0a.694.694 0 011.122.22.667.667 0 01-.149.738l-.698.687a.5.5 0 01-.701 0l-.698-.687a.672.672 0 010-.957.694.694 0 01.973 0zm6 0c.042.042.11.042.151 0a.694.694 0 011.122.22.667.667 0 01-.149.738l-.698.687a.5.5 0 01-.701 0l-.698-.687a.672.672 0 010-.957.693.693 0 01.973 0z"
                style={{
                    animation: "love-face 1s ease-in-out infinite both",
                    transformOrigin: "center center"
                }}
            />
        </Svg>
    )
}

export default HappyFaceIcon
