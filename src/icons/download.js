import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownloadIcon({ width, height, black }) {
    return (
        <Svg
            width={width || 32}
            height={height || 32}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M3 15c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15M12 3v13m0 0l4-4.375M12 16l-4-4.375"
                stroke={black ? "#000" : "#d18ead"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default DownloadIcon
