import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SelectUp = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M10 5.692a4.167 4.167 0 0 1 2.95 1.216l6.808 6.809a.837.837 0 1 1-1.183 1.183l-6.808-6.808a2.5 2.5 0 0 0-3.534 0L1.425 14.9a.836.836 0 1 1-1.183-1.183L7.05 6.908A4.167 4.167 0 0 1 10 5.692Z"
        fill="#BEBFC3"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="rotate(-180 10 10)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SelectUp;
