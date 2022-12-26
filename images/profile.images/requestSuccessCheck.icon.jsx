import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const RequestSuccessCheck = (props) => (
  <Svg
    width={100}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M32.288 86.094a10.685 10.685 0 0 1-7.566-3.136L1.846 60.091a6.305 6.305 0 0 1 8.916-8.916l21.526 21.527 56.95-56.95a6.305 6.305 0 0 1 8.916 8.916l-58.3 58.29a10.685 10.685 0 0 1-7.566 3.136Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h100v100H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default RequestSuccessCheck;
