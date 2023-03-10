import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ProfileIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM10 11.667a7.508 7.508 0 0 0-7.5 7.5c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833a7.508 7.508 0 0 0-7.5-7.5Z"
      fill={props.color}
    />
  </Svg>
)
