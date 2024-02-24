import React from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";
import Icons from "../../appearance/components/Icons";
import { SOCIAL_ICONS_SHARE } from "../../../config";

const StyledUserTreeSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Icon = styled.a`
  display: ${(props) => (props.$display ? "flex" : "none")};
  font-size: 32px;
  color: ${(props) =>
    tinycolor(props.$backgroundColor).isDark()
      ? "var(--color-grey-0)"
      : "var(--color-grey-900)"};
  transition: 0.3s ease;

  &:hover {
    scale: 1.1;
  }
`;

function UserTreeSocialIcons({ icons, backgroundColor }) {
  return (
    <StyledUserTreeSocialIcons>
      {icons.map((icon) => (
        <Icon
          $backgroundColor={backgroundColor}
          $display={icon.display}
          href={SOCIAL_ICONS_SHARE[icon.social] + icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={icon.id}
        >
          {React.createElement(Icons[icon.social])}
        </Icon>
      ))}
    </StyledUserTreeSocialIcons>
  );
}

export default UserTreeSocialIcons;
