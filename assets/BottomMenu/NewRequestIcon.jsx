import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const NewRequestIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.75 8.75h-7.5v-7.5a1.25 1.25 0 1 0-2.5 0v7.5h-7.5a1.25 1.25 0 0 0 0 2.5h7.5v7.5a1.25 1.25 0 1 0 2.5 0v-7.5h7.5a1.25 1.25 0 1 0 0-2.5Z"
      fill={props.color}
    />
  </Svg>
)
