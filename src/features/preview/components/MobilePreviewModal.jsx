import { HiEye } from "react-icons/hi2";
import styled from "styled-components";

import Modal from "../../../components/modal/Modal";
import PreviewContainer from "./PreviewContainer";

const StyledMobilePreviewModal = styled.div`
  display: none;

  @media screen and (max-width: 1280px) {
    display: flex;
  }
`;

const Button = styled.button`
  position: fixed;
  z-index: 100;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 4px;
  background: var(--color-grey-300);
  color: var(--color-grey-700);
  padding: 14px 20px;
  border-radius: 50px;
  font-weight: 600;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;

  & > :nth-child(1) {
    scale: 0.9;
  }
`;

function MobilePreviewModal() {
  return (
    <StyledMobilePreviewModal>
      <Modal>
        <Modal.Open opens="mobilePreviewModal">
          <Button>
            <HiEye /> Preview
          </Button>
        </Modal.Open>
        <Modal.Window name="mobilePreviewModal" title="Preview">
          <Container>
            <PreviewContainer />
          </Container>
        </Modal.Window>
      </Modal>
    </StyledMobilePreviewModal>
  );
}

export default MobilePreviewModal;
