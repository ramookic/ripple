import { useState } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInlideEdit = styled.input`
  all: unset;
  font-weight: 600;
  font-size: 15px;
  border: none;
  outline: none;
  width: fit-content;

  &:hover {
    border: none;
    outline: none;
  }

  &:focus {
    border: none;
    outline: none;
    font-weight: 400;
  }
`;

function InlineEdit({ type, value, handleUpdate }) {
  const [editingValue, setEditingValue] = useState(value);
  const [hideIcon, setHideIcon] = useState(true);

  function debounce(callback, delay) {
    let timeoutId;

    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  }

  const debouncedUpdate = debounce(handleUpdate, 1000);

  function handleInputChange(e) {
    setEditingValue(e.target.value);
    debouncedUpdate(e.target.value);
  }

  return (
    <Container>
      <StyledInlideEdit
        type={type}
        value={editingValue}
        onChange={handleInputChange}
        onFocus={() => setHideIcon(false)}
        onBlur={() => setHideIcon(true)}
      />
      {hideIcon && <FaPenToSquare color="var(--color-grey-400)" />}
    </Container>
  );
}

export default InlineEdit;
