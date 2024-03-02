import React, { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: absolute;
  z-index: 9000;
  top: 100%;
  min-width: 300px;
  background: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  padding: 20px;
  border-radius: 20px;
  left: auto;
  right: 0;
`;

const Dropdown = ({ buttonContent, dropdownContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const ref = useOutsideClick(closeDropdown);

  return (
    <div>
      <div onClick={toggleDropdown}>{buttonContent}</div>
      {isOpen && <StyledDropdown ref={ref}>{dropdownContent}</StyledDropdown>}
    </div>
  );
};

export default Dropdown;
