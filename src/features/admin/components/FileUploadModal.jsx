import styled from "styled-components";
import Modal from "../../../components/modal/Modal";
import { HiOutlineDocument } from "react-icons/hi2";

const StyledContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  min-height: 500px;
  border: 1px dashed var(--color-grey-200);
  border-radius: 10px;
`;

function FileUploadModal({ children, onChange }) {
  return (
    <Modal>
      <Modal.Open opens="fileUploadModal">{children}</Modal.Open>
      <Modal.Window name="fileUploadModal" title="Upload media">
        <Container onChange={onChange} />
      </Modal.Window>
    </Modal>
  );
}

function Container({ onChange, onClose }) {
  function handleUpload() {
    onClose();
  }

  return (
    <StyledContainer onClick={handleUpload}>
      <span>
        <HiOutlineDocument size={42} />
      </span>
      <p>Select file to upload or drag & drop file</p>
    </StyledContainer>
  );
}

export default FileUploadModal;
