import { HiOutlineTrash } from "react-icons/hi2";
import styled from "styled-components";

import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import SpinnerMini from "../../../components/ui/SpinnerMini";

import { useDeleteLink } from "../hooks/useDeleteLink";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & p {
    font-size: 15px;
    font-weight: 500;
  }
`;

function DeleteLinkModal({ linkId }) {
  const { deleteLink, isPending } = useDeleteLink();

  function handleDelete() {
    deleteLink(linkId);
  }

  return (
    <Modal>
      <Modal.Open opens="deleteLinkModal">
        <button style={{ display: "flex", color: "var(--color-grey-500)" }}>
          <HiOutlineTrash />
        </button>
      </Modal.Open>
      <Modal.Window name="deleteLinkModal" title="Delete link">
        <Container>
          <p>Do you want to delete this link?</p>
          <Button className="red" onClick={handleDelete}>
            {isPending ? (
              <>
                Deleting Link <SpinnerMini />
              </>
            ) : (
              "Delete Link"
            )}
          </Button>
        </Container>
      </Modal.Window>
    </Modal>
  );
}

export default DeleteLinkModal;
