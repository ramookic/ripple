import styled from "styled-components";
import { useState } from "react";

import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";

import { FONTS } from "../../../config";

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  font-family: ${(props) => props.$font}, sans-serif;
  outline: 1px solid var(--color-grey-200);
  border-radius: 10px;
  box-shadow: var(--shadow-md);
  transition: 0.3s ease;

  & p {
    font-weight: 600;
    font-size: 18px;
  }

  & span {
    font-size: 20px;
    padding: 14px;
    background: var(--color-grey-100);
    border-radius: 10px;
  }

  &:hover {
    background: var(--color-grey-100);

    & span {
      background: var(--color-grey-0);
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  & button {
    display: flex;
    padding: 16px 24px;
    width: 100%;
    border-radius: 50px;
    font-weight: 500;

    &:hover {
      background: var(--color-grey-100);
    }

    &.selected {
      background: var(--color-brand-200);
    }
  }
`;

function SelectFontModal({ font, onChange }) {
  return (
    <Modal>
      <Modal.Open opens="selectFontModal">
        <ModalButton $font={font}>
          <span>Aa</span>
          <p>{font}</p>
        </ModalButton>
      </Modal.Open>
      <Modal.Window name="selectFontModal" title="Select a font">
        <Container font={font} onChange={onChange} />
      </Modal.Window>
    </Modal>
  );
}

function Container({ font, onChange, onClose }) {
  const [selected, setSelected] = useState(font);

  function handleUpdate() {
    onChange(selected);
    onClose();
  }

  return (
    <StyledContainer>
      <div>
        {FONTS.map((fontName, i) => (
          <button
            className={selected === fontName ? "selected" : ""}
            style={{ fontFamily: `${fontName}, sans-serif` }}
            onClick={() => setSelected(fontName)}
            key={i}
          >
            {fontName}
          </button>
        ))}
      </div>
      <Button
        className="brand"
        disabled={font === selected}
        onClick={handleUpdate}
      >
        Save
      </Button>
    </StyledContainer>
  );
}

export default SelectFontModal;
