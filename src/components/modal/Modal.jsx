import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { HiMiniXMark } from "react-icons/hi2";

const StyledModal = styled.div`
  overflow-y: none;
  position: fixed;
  background-color: var(--color-grey-0);
  border-radius: 16px;
  padding: 20px;
  transition: all 0.5s;
  max-width: 520px;
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 44rem) {
    top: auto;
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #37415183;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
`;

const Header = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-weight: 600;
    font-size: 15px;
  }

  & button {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    padding: 4px;
    font-size: 22px;
    color: var(--color-grey-700);
    border-radius: 4px;

    &:hover {
      background: var(--color-grey-50);
    }
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name, title }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Header>
          <p>{title}</p>
          <button onClick={close}>
            <HiMiniXMark />
          </button>
        </Header>

        <div>{cloneElement(children, { onClose: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
