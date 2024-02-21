import { css } from "styled-components";
import tinycolor from "tinycolor2";

const UserTreeBackground = css`
  &.flat {
    background: ${(props) => props.$backgroundColor};
  }

  &.gradient {
    background: linear-gradient(
      ${(props) => props.$direction},
      ${(props) => props.$backgroundColor},
      ${(props) => tinycolor(props.$backgroundColor).lighten(28).toString()}
    );
  }

  &.image {
    background: url(${(props) => props.$backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default UserTreeBackground;
