import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";

const StyledAnalyticsNoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;

  & p {
    font-size: 15px;
    color: var(--color-grey-400);
  }
`;

function AnalyticsNoData() {
  return (
    <AdminContainer>
      <StyledAnalyticsNoData>
        <p>No Data to Display</p>
      </StyledAnalyticsNoData>
    </AdminContainer>
  );
}

export default AnalyticsNoData;
