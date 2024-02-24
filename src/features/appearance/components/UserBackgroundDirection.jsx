import styled from "styled-components";

const StyledUserBackgroundDirection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    & > :nth-child(2) {
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    &.gradientUp {
      background: linear-gradient(
        to top,
        var(--color-grey-800),
        var(--color-grey-200)
      );
    }

    &.gradientDown {
      background: linear-gradient(
        to bottom,
        var(--color-grey-800),
        var(--color-grey-200)
      );
    }

    &.switch {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      border-radius: 50px;
      outline: 1px solid var(--color-grey-300);

      &.active {
        border: 10px solid var(--color-grey-800);
      }
    }

    & h4 {
      font-weight: 500;
      font-size: 15px;
    }
  }
`;

function UserBackgroundDirection({ direction, onChange }) {
  return (
    <StyledUserBackgroundDirection>
      <div onClick={() => onChange("to top")}>
        <div
          className={`switch ${direction === "to top" ? "active" : ""}`}
        ></div>
        <div className="gradientUp"></div>
        <h4>Gradient Up</h4>
      </div>
      <div onClick={() => onChange("to bottom")}>
        <div
          className={`switch ${direction === "to bottom" ? "active" : ""}`}
        ></div>
        <div className="gradientDown"></div>
        <h4>Gradient Down</h4>
      </div>
    </StyledUserBackgroundDirection>
  );
}

export default UserBackgroundDirection;
