import styled from "styled-components";

import Switch from "../../../components/ui/Switch";
import Icons from "../../appearance/components/Icons";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { useUpdateSocialIcon } from "../hooks/useUpdateSocialIcon";
import Modal from "../../../components/modal/Modal";
import UserEditDeleteSocialIcon from "./UserEditDeleteSocialIcon";

const StyledUserSocialIcon = styled.div`
  display: flex;
  justify-content: space-between;

  & button {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--color-grey-700);
    width: 100%;
    padding: 20px;
    border-radius: 10px;

    &:hover {
      background: var(--color-grey-100);
    }

    & span {
      display: flex;
      align-items: center;
      font-size: 24px;
    }

    & p {
      font-size: 14px;
      font-weight: 700;
      text-transform: capitalize;
    }

    & > :last-child {
      position: absolute;
      right: 20px;
      color: var(--color-grey-400);
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  & > :nth-child(2) {
    align-items: center;
  }
`;

function UserSocialIcon({ social, link, display, id }) {
  const { updateSocialIcon } = useUpdateSocialIcon();

  function showIcon() {
    updateSocialIcon({ updateData: { display: !display }, id });
  }

  return (
    <StyledUserSocialIcon>
      <Modal>
        <Modal.Open opens="editDeleteSocialIconModal">
          <button>
            <span>{React.createElement(Icons[social])}</span>
            <p>{social}</p>
            <FaPenToSquare />
          </button>
        </Modal.Open>
        <Modal.Window name="editDeleteSocialIconModal" title={`Edit ${social}`}>
          <UserEditDeleteSocialIcon social={social} link={link} id={id} />
        </Modal.Window>
      </Modal>
      <div>
        <Switch isChecked={display} onClick={showIcon} />
      </div>
    </StyledUserSocialIcon>
  );
}

export default UserSocialIcon;
