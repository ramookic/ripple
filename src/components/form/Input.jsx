import { useState } from "react";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;
  display: flex;

  & input {
    width: ${(props) => (props.$fitContent ? "fit-content" : "100%")};

    &:focus + label {
      top: 6px;
      font-size: 12px;
    }
  }

  & label {
    position: absolute;
    top: ${(props) => (props.value ? "6px" : "16px")};
    left: 20px;
    color: var(--color-grey-500);
    font-weight: 500;
    font-size: ${(props) => (props.value ? "12px" : "14px")};
    transition: 0.3s ease;
  }

  &.warning {
    border-radius: 10px;
    outline: 2px solid var(--color-red-500);

    & label {
      color: var(--color-red-500);
    }
  }

  & button {
    position: absolute;
    color: var(--color-grey-500);
    right: 14px;
    top: 16px;
  }
`;

function Input({
  className,
  placeholder,
  id,
  disabled,
  value,
  onChange,
  isPassword,
  isEmail,
  isUrl,
  fitContent,
}) {
  const [isVisible, setIsVisible] = useState(false);

  function checkType() {
    if (isEmail) return "email";
    if (isUrl) return "url";

    if (isPassword && !isVisible) {
      return "password";
    } else {
      return "text";
    }
  }

  return (
    <StyledInput value={value} $fitContent={fitContent} className={className}>
      <input
        type={checkType()}
        id={id}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{placeholder}</label>
      {isPassword && (
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? <HiOutlineEye /> : <HiOutlineEyeSlash />}
        </button>
      )}
    </StyledInput>
  );
}

export default Input;
