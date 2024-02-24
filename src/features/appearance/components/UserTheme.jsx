import styled from "styled-components";
import tinycolor from "tinycolor2";

const UserTheme = styled.div`
  height: 220px;
  width: 100%;
  border-radius: 10px;
  outline: 1px solid var(--color-grey-200);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;

  &.flat {
    background: ${(props) =>
      props.$background ? props.$background : "var(--color-grey-0)"};
  }

  &.gradient {
    background: linear-gradient(
      ${(props) => props.$direction},
      ${(props) => props.$background},
      ${(props) => tinycolor(props.$background).lighten(28).toString()}
    );
  }

  & div {
    height: 16px;
    width: 80%;
  }

  &.fill div {
    background: ${(props) =>
      props.$buttonsBackgroundColor
        ? props.$buttonsBackgroundColor
        : "var(--color-grey-300)"};
  }

  &.outline div {
    outline: 1px solid
      ${(props) =>
        props.$buttonsBackgroundColor
          ? props.$buttonsBackgroundColor
          : "var(--color-grey-300)"};
  }

  &.semiRounded div {
    border-radius: 4px;
  }

  &.rounded div {
    border-radius: 50px;
  }

  @media screen and (max-width: 768px) {
    height: 280px;
  }
`;

export default UserTheme;
