import styled from "styled-components";
import tinycolor from "tinycolor2";

const UserTreeButton = styled.a`
  display: ${(props) => (props.$display ? "block" : "none")};
  font-weight: 600;
  font-size: ${(props) => (props.$isPreview ? "14px" : "15px")};
  padding: ${(props) => (props.$isPreview ? "14px" : "20px")};
  width: 100%;
  text-align: center;
  transition: 0.3s ease;
  border: 2px solid ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};

  &.semiRounded {
    border-radius: 10px;
  }

  &.rounded {
    border-radius: 50px;
  }

  &.fill {
    background: ${(props) => props.$backgroundColor};

    &:hover {
      background: transparent;
      color: ${(props) => props.$backgroundColor};
    }
  }

  &.outline {
    background: none;

    &:hover {
      color: ${(props) =>
        tinycolor(props.$fontColor).isDark() ? "#ffffff" : "#000000"};
      background: ${(props) => props.$backgroundColor};
    }
  }

  &.softShadow {
    background: ${(props) => props.$backgroundColor};
    box-shadow: ${(props) => props.$shadowColor} 0px 4px 24px -14px;

    &:hover {
      scale: 1.01;
    }
  }

  &.hardShadow {
    background: ${(props) => props.$backgroundColor};
    box-shadow: 6px 6px ${(props) => props.$shadowColor};

    &:hover {
      box-shadow: 0px 0px ${(props) => props.$shadowColor};
    }
  }
`;

export default UserTreeButton;
