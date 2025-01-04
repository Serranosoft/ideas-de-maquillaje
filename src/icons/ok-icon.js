import * as React from "react"
import Svg, { Defs, G, Path } from "react-native-svg"

function OkIcon({ width, height, black }) {
    return (
        <Svg
            width={width || 32}
            height={height || 32}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Defs></Defs>
            <G id="checkmark">
                <Path className="cls-1" d="M3 16L12 25" />
                <Path className="cls-1" d="M12 25L29 7" />
            </G>
        </Svg>
    )
}

export default OkIcon
