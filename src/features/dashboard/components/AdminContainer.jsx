import styled from "styled-components";

const AdminContainer = styled.div`
  background: var(--color-grey-0);
  padding: 20px;
  border-radius: 20px;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 20px;

  & h4 {
    font-size: 15px;
  }
`;

export default AdminContainer;
