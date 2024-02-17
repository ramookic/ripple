import styled from "styled-components";

const AuthFormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 560px;
  width: 100%;
  margin: 0 auto;

  & p,
  a {
    font-size: 14px;
  }

  & p {
    color: var(--color-grey-500);
  }

  & a {
    color: var(--color-brand-500);
  }
`;

export default AuthFormLayout;
