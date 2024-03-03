import styled from "styled-components";
import Modal from "../../../components/modal/Modal";
import { HiOutlineDocument } from "react-icons/hi2";
import toast from "react-hot-toast";
import { useEffect } from "react";

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-height: 500px;
  border: 1px dashed var(--color-grey-200);
  border-radius: 10px;

  & input {
    position: absolute;
    width: 100%;
    height: 100%;
    display: hidden;
    opacity: 0;
    cursor: pointer;
  }
`;

function FileUploadModal({ children, onChange, accept, isPending }) {
  useEffect(
    function () {
      if (isPending) {
        toast.loading("Uploading...");
      }

      if (!isPending) toast.dismiss();
    },
    [isPending]
  );

  return (
    <Modal>
      <Modal.Open opens="fileUploadModal">{children}</Modal.Open>
      <Modal.Window name="fileUploadModal" title="Upload media">
        <Container onChange={onChange} accept={accept} />
      </Modal.Window>
    </Modal>
  );
}

function Container({ onClose, onChange, accept }) {
  function handleUpload(e) {
    const file = e.target.files[0];

    onChange(file);
    onClose();
  }

  return (
    <StyledContainer>
      <input type="file" accept={accept} onChange={handleUpload} />
      <span>
        <HiOutlineDocument size={42} />
      </span>
      <p>Select file to upload or drag & drop file</p>
    </StyledContainer>
  );
}

export default FileUploadModal;
