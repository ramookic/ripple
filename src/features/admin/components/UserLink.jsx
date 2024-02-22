import styled from "styled-components";

import Switch from "../../../components/ui/Switch";
import DeleteLinkModal from "./DeleteLinkModal";

import { useUpdateLink } from "../hooks/useUpdateLink";

const StyledUserLink = styled.div`
  background: var(--color-grey-0);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);

  & p,
  span {
    color: var(--color-grey-900);
    font-weight: 600;
    font-size: 14px;
  }

  & span {
    font-weight: 500;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & > :nth-child(2) {
    align-items: center;
  }
`;

function UserLink({ title, linkTo, display, id }) {
  const { updateLink } = useUpdateLink();

  function showLink() {
    updateLink({ updateData: { display: !display }, id });
  }

  return (
    <StyledUserLink>
      <div>
        <p>{title}</p>
        <span href="$">{linkTo}</span>
      </div>
      <div>
        <Switch isChecked={display} onClick={showLink} />
        <DeleteLinkModal linkId={id} />
      </div>
    </StyledUserLink>
  );
}

export default UserLink;
