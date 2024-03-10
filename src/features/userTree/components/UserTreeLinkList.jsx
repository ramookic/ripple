import styled from "styled-components";

import UserTreeButton from "./UserTreeButton";
import apiAddLinkClick from "../../../services/analytics/apiAddLinkClick";

const StyledUserTreeLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function UserTreeLinkList({ links, appearance, isPreview, userId }) {
  return (
    <StyledUserTreeLinkList>
      {links.map((link, index) => (
        <UserTreeButton
          href={link.link}
          className={`${appearance.buttonsType} ${appearance.buttonsRounded}`}
          $backgroundColor={appearance.buttonsBackgroundColor}
          $fontColor={appearance.buttonsFontColor}
          $shadowColor={appearance.buttonsShadowColor}
          $isPreview={isPreview}
          $display={link.display}
          onClick={() => apiAddLinkClick(userId, link.id)}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {link.title}
        </UserTreeButton>
      ))}
    </StyledUserTreeLinkList>
  );
}

export default UserTreeLinkList;
