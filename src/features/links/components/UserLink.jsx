import styled from "styled-components";

import Switch from "../../../components/ui/Switch";
import DeleteLinkModal from "./DeleteLinkModal";

import { useUpdateLink } from "../hooks/useUpdateLink";
import InlineEdit from "../../../components/ui/InlineEdit";

const StyledUserLink = styled.div`
  background: var(--color-grey-0);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);

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

  function updateLinkTitle(value) {
    updateLink({ updateData: { title: value }, id });
  }

  function updateLinkValue(value) {
    updateLink({ updateData: { link: value }, id });
  }

  return (
    <StyledUserLink>
      <div>
        <InlineEdit type="text" value={title} handleUpdate={updateLinkTitle} />
        <InlineEdit type="url" value={linkTo} handleUpdate={updateLinkValue} />
      </div>
      <div>
        <Switch isChecked={display} onClick={showLink} />
        <DeleteLinkModal linkId={id} />
      </div>
    </StyledUserLink>
  );
}

export default UserLink;
