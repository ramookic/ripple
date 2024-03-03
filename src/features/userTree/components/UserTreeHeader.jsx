import styled from "styled-components";

const StyledUserTreeHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 14px;
  gap: ${(props) => (props.$isPreview ? "8px" : "14px")};

  & h1,
  p {
    color: ${(props) => props.$fontColor};
    text-align: center;
  }

  & h1 {
    font-size: ${(props) => (props.$isPreview ? "18px" : "20px")};
    font-weight: ${(props) => (props.$isPreview ? "500" : "600")};
  }

  & p {
    font-size: ${(props) => (props.$isPreview ? "12px" : "16px")};
    font-weight: 400;
  }

  & img {
    object-fit: cover;
    width: ${(props) => (props.$isPreview ? "80px" : "100px")};
    height: ${(props) => (props.$isPreview ? "80px" : "100px")};
    border-radius: 100%;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.$isPreview ? "80px" : "100px")};
    height: ${(props) => (props.$isPreview ? "80px" : "100px")};
    border-radius: 100%;
    background: var(--color-grey-900);
    color: var(--color-grey-0);
    font-size: ${(props) => (props.$isPreview ? "28px" : "32px")};
    font-weight: 500;
  }
`;

function UserTreeHeader({
  fontColor,
  profileImage,
  username,
  profileTitle,
  bio,
  isPreview,
}) {
  return (
    <StyledUserTreeHeader $isPreview={isPreview} $fontColor={fontColor}>
      {profileImage ? (
        <img src={profileImage} alt={username} />
      ) : (
        <span>{username.split("")[0].toUpperCase()}</span>
      )}
      <h1>{profileTitle}</h1>
      <p>{bio}</p>
    </StyledUserTreeHeader>
  );
}

export default UserTreeHeader;
