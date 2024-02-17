import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 14px 20px;
  border-radius: 50px;
  width: 100%;
  background: var(--color-grey-900);
  color: var(--color-grey-0);
  font-size: 15px;
  font-weight: 700;
  border: 1px solid var(--color-grey-900);
  transition: 0.3s ease;

  &:disabled {
    background: var(--color-grey-200) !important;
    border: 1px solid var(--color-grey-200) !important;
    color: var(--color-grey-400) !important;
    cursor: default;
  }

  &.fit-content {
    margin: 0 auto;
    width: fit-content;
  }

  &.light {
    color: var(--color-grey-900);
    background: var(--color-grey-100);
    border: 1px solid var(--color-grey-100);

    &:hover {
      background: var(--color-grey-0);
      border: 1px solid var(--color-grey-0);
    }
  }

  &.secondary {
    border: 1px solid var(--color-grey-100);
    background: var(--color-grey-0);
    color: var(--color-grey-900);

    &:hover {
      background: var(--color-grey-100);
    }
  }

  &.brand {
    border: 1px solid var(--color-brand-500);
    background: var(--color-brand-500);
    color: var(--color-grey-0);

    &:hover {
      border: 1px solid var(--color-brand-600);
      background: var(--color-brand-600);
    }
  }

  &.red {
    border: 1px solid var(--color-red-500);
    background: var(--color-red-500);
    color: var(--color-grey-0);

    &:hover {
      border: 1px solid var(--color-red-700);
      background: var(--color-red-700);
    }
  }
`;

function Button({ to, children, className, disabled, onClick, hidden }) {
  const navigate = useNavigate();

  if (!to) {
    return (
      <StyledButton
        className={className}
        disabled={disabled}
        onClick={onClick}
        hidden={hidden}
      >
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      onClick={() => navigate(to)}
      className={className}
      disabled={disabled}
      $hidden={hidden}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
