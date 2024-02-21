import { useEffect, useRef } from "react";
import styled from "styled-components";

import UserTreeModal from "./UserTreeModal";

const Layout = styled.div`
  position: fixed;
  top: 20px;
  max-width: 42rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 10;

  @media screen and (max-width: 42rem) {
    padding: 0 20px 0 0;
  }
`;

const StyledUserTreeScrollHeader = styled.div`
  background: #fcfcfcda;
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 10px;
  border: 1px solid #eeeeeeab;

  & h1 {
    display: none;
    color: ${(props) => props.$fontColor};
    font-size: 18px;
  }

  & img {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    object-fit: cover;
    display: none;
  }

  & span {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: var(--color-grey-900);
    color: var(--color-grey-0);
    font-size: 16px;
    font-weight: 500;
  }

  & button {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: var(--color-grey-900);
    transition: 0.3s ease;
  }

  &.active {
    width: 100%;
    background: #cccccc8f;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & h1 {
      display: block;
    }

    & img {
      display: block;
    }

    & span {
      display: flex;
    }

    & button {
      padding: 10px;
      border-radius: 50px;
      background: var(--color-grey-900);
      color: var(--color-grey-0);
    }
  }
`;

function UserTreeScrollHeader({
  fontColor,
  profileImage,
  profileTitle,
  username,
}) {
  const navRef = useRef(null);

  useEffect(function () {
    window.onscroll = function () {
      if (document.documentElement.scrollTop >= 40) {
        navRef.current.classList.add("active");
      } else {
        navRef.current.classList.remove("active");
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <Layout>
      <StyledUserTreeScrollHeader ref={navRef} $fontColor={fontColor}>
        {profileImage ? (
          <img src={profileImage} alt={username} />
        ) : (
          <span>{username.split("")[0].toUpperCase()}</span>
        )}
        <h1>{profileTitle}</h1>
        <UserTreeModal />
      </StyledUserTreeScrollHeader>
    </Layout>
  );
}

export default UserTreeScrollHeader;
