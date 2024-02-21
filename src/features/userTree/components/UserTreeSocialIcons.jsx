import React from "react";
import styled from "styled-components";
import tinycolor from "tinycolor2";

import {
  FaSnapchat,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

const Icons = {
  snapchat: FaSnapchat,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  whatsapp: FaWhatsapp,
};

const shareString = {
  snapchat: "https://snapchat.com/",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/@",
  whatsapp: "https://whatsapp.com/",
};

const StyledUserTreeSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & a {
    font-size: 32px;
    color: ${(props) =>
      tinycolor(props.$backgroundColor).isDark()
        ? "var(--color-grey-0)"
        : "var(--color-grey-900)"};
    transition: 0.3s ease;

    &:hover {
      scale: 1.2;
    }
  }
`;

function UserTreeSocialIcons({ data }) {
  const { socialIcons: links } = data;
  const { color: backgroundColor } = data.apperance.background;

  return (
    <StyledUserTreeSocialIcons $background={backgroundColor}>
      {links.map((link) =>
        link.link === "" ? (
          ""
        ) : (
          <a
            href={shareString[link.icon] + link.link}
            target="_blank"
            rel="noopener noreferrer"
            key={link.icon}
          >
            {React.createElement(Icons[link.icon])}
          </a>
        )
      )}
    </StyledUserTreeSocialIcons>
  );
}

export default UserTreeSocialIcons;
