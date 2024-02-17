import styled from "styled-components";

const StyledAuthHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & h1 {
    font-weight: 800;
    font-size: 48px;
    font-family: "Inter", sans-serif;
    color: var(--color-grey-800);

    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
  }

  & p {
    color: var(--color-grey-500);
    font-size: 16px;
    font-weight: 500;
  }
`;

function AuthHeading({ type }) {
  return (
    <StyledAuthHeading>
      <h1>{type ? "Welcome back" : "Join Ripple"}</h1>
      <p>{type ? "Log in to your Ripple" : "Sign up for free!"}</p>
    </StyledAuthHeading>
  );
}

export default AuthHeading;
