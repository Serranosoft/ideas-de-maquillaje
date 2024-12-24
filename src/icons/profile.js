import * as React from "react"
import Svg, {
  G,
  Mask,
  Path,
  Defs,
  RadialGradient,
  Stop,
  ClipPath
} from "react-native-svg"

function ProfileIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width={100}
      height={100}
      className="coolshapes misc-5"
      {...props}
    >
      <G clipPath="url(#cs_clip_1_misc-5)">
        <Mask
          id="a"
          style={{
            maskType: "alpha"
          }}
          width={200}
          height={185}
          x={0}
          y={8}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            d="M145 8c30.376 0 55 25 55 60 0 70-75 110-100 125C75 178 0 138 0 68 0 33 25 8 55 8c18.6 0 35 10 45 20 10-10 26.4-20 45-20z"
          />
        </Mask>
        <G mask="url(#a)">
          <Path fill="#fff" d="M200 0H0v200h200V0z" />
          <Path fill="url(#paint0_radial_748_5033)" d="M200 0H0v200h200V0z" />
          <Path fill="url(#paint1_radial_748_5033)" d="M200 0H0v200h200V0z" />
        </G>
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_748_5033"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(116.694 71.023 87.946) scale(199.234)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFF500" />
          <Stop offset={1} stopColor="#FF00D6" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_748_5033"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(48.452 -12.085 35.502) scale(223.143)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF00D6" />
          <Stop offset={0.461} stopColor="#FF7171" stopOpacity={0.84} />
          <Stop offset={1} stopColor="#FFF500" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="cs_clip_1_misc-5">
          <Path fill="#fff" d="M0 0h200v200H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ProfileIcon
