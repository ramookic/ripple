import { useRef } from "react";
import { DOMAIN_NAME } from "../../../config";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetProfile } from "../../profile/hooks/useGetProfile";
import { SiLinktree } from "react-icons/si";
import styled from "styled-components";

const StyledShareModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 14px;
    text-align: center;
    color: var(--color-grey-500);
  }

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    border-radius: 10px;
    outline: 1px solid var(--color-grey-200);

    font-size: 15px;
    font-weight: 500;
  }
`;

function ShareModal({ onClose }) {
  const { user } = useUser();
  const { profile, isPending } = useGetProfile(user.id);

  const copyButtonRef = useRef(null);

  if (isPending) return null;

  function copyLink() {
    navigator.clipboard.writeText(`${DOMAIN_NAME}/${profile.username}`);
    copyButtonRef.current.innerHTML = "Copied!";

    setTimeout(() => {
      copyButtonRef.current.innerHTML = "Copy";
      onClose();
    }, 1000);
  }

  return (
    <StyledShareModal>
      <p>Get more visitors by sharing your Ripple</p>
      <button onClick={copyLink}>
        <SiLinktree color={"var(--color-green-500)"} />
        {`${DOMAIN_NAME}/${profile.username}`}
        <span ref={copyButtonRef}>Copy</span>
      </button>
    </StyledShareModal>
  );
}

export default ShareModal;
