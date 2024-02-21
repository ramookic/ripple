import styled from "styled-components";
import { HiEnvelope, HiLink } from "react-icons/hi2";
import { useRef } from "react";

const StyledUserTreeShareOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > p {
    color: var(--color-grey-900);
    font-weight: 600;
    font-size: 14px;
  }

  & > div {
    display: flex;
    gap: 20px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-grey-100);
      border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background: var(--color-grey-300);
    }

    & a,
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 13px;
      font-weight: 600;
      color: var(--color-grey-900);
      white-space: nowrap;
      margin-bottom: 10px;

      & img {
        background: var(--color-grey-100);
        width: 50px;
        height: 50px;
        object-fit: cover;
        border-radius: 100%;
      }
    }
  }
`;

const IconStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background: var(--color-grey-100);
  color: var(--color-grey-700);
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 100%;
`;

function UserTreeShareOptions({ link }) {
  const copyButtonRef = useRef(null);

  function copyLink(link) {
    navigator.clipboard.writeText(link);
    copyButtonRef.current.innerHTML = "Copied!";

    setTimeout(() => (copyButtonRef.current.innerHTML = "Copy link"), 3000);
  }

  return (
    <StyledUserTreeShareOptions>
      <p>Share options</p>
      <div>
        <button onClick={() => copyLink(link)}>
          <IconStyle>
            <HiLink />
          </IconStyle>
          <span ref={copyButtonRef}>Copy link</span>
        </button>
        <a
          href="https://www.snapchat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/icons/snapchat.svg" alt="Snapchat Logo" />
          Snapchat
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=https://ripple.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/icons/facebook.svg" alt="Snapchat Logo" />
          Facebook
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?url=https://ripple.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/icons/linkedin.svg" alt="Snapchat Logo" />
          LinkedIn
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=Check%20this%20out:%20https://ripple.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/icons/whatsapp.svg" alt="Snapchat Logo" />
          WhatsApp
        </a>
        <a
          href={`https://www.facebook.com/dialog/send?link=https://ripple.com/${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./assets/icons/messenger.svg" alt="Snapchat Logo" />
          Messenger
        </a>
        <a
          href={`mailto:?subject=Check%20this%20out&body=I%20thought%20you%20might%20find%20this%20interesting:%20https://ripple.com/${link}`}
        >
          <IconStyle>
            <HiEnvelope />
          </IconStyle>
          Email
        </a>
      </div>
    </StyledUserTreeShareOptions>
  );
}

export default UserTreeShareOptions;
