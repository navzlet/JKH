import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const CommunicationsIcon = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M16.396 2.298A9.946 9.946 0 0 0 8.728.083 10 10 0 0 0 10.015 20h5.818A4.172 4.172 0 0 0 20 15.833V9.372a10.037 10.037 0 0 0-3.604-7.074Zm-9.73 3.535H10A.833.833 0 0 1 10 7.5H6.667a.833.833 0 1 1 0-1.667Zm6.667 8.334H6.667a.833.833 0 1 1 0-1.667h6.666a.833.833 0 1 1 0 1.667Zm0-3.334H6.667a.833.833 0 1 1 0-1.666h6.666a.833.833 0 1 1 0 1.666Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
