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

  & video,
  & > .backgroundImage {
    z-index: -1;
    position: fixed;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default UserTreeBackground;
