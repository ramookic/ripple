import styled from "styled-components";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 20px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-grey-300);
    border-radius: 34px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & span::before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: var(--color-grey-0);
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & input:checked + span {
    background-color: var(--color-green-700);
  }

  input:focus + span {
    box-shadow: 0 0 1px var(--color-green-700);
  }

  input:checked + span:before {
    transform: translateX(14px);
  }
`;

function Switch({ isChecked, onClick }) {
  return (
    <StyledSwitch>
      <input type="checkbox" checked={isChecked} onClick={onClick} readOnly />
      <span></span>
    </StyledSwitch>
  );
}

export default Switch;
