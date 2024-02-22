import styled from "styled-components";
import Skeleton from "./Skeleton";

const StyledSkeletonAdminContainer = styled.div`
  & div {
    height: 340px;
    border-radius: 20px;
  }
`;

function SkeletonAdminContainer() {
  return (
    <StyledSkeletonAdminContainer>
      <Skeleton />
    </StyledSkeletonAdminContainer>
  );
}

export default SkeletonAdminContainer;
