import styled from "styled-components";

import UserTreeButton from "./UserTreeButton";

const StyledUserTreeLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function UserTreeLinkList({ links, appearance, isPreview }) {
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
