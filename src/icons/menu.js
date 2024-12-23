import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MenuIcon = ({ width, height }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 32}
    height={height || 32}
    fill="none"
    viewBox="0 0 24 24"
  >
    <Path
      stroke="#cc81a3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 17h8m-8-5h14M5 7h8"
    />
  </Svg>
)
export default MenuIcon
