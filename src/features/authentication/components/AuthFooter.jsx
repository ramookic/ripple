import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAuthFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 14px;
    color: var(--color-grey-500);
  }

  & a {
    font-size: 14px;
    color: var(--color-brand-500);
    text-decoration: underline;
  }
`;

function AuthFooter({ type }) {
  return (
    <StyledAuthFooter>
      {type ? (
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      ) : (
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      )}
    </StyledAuthFooter>
  );
}

export default AuthFooter;
