import styled from "styled-components";
import Skeleton from "./Skeleton";

const StyledSkeletonUserLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    border-radius: 20px;
    height: 120px;
  }
`;

function SkeletonUserLinks() {
  return (
    <StyledSkeletonUserLinks>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </StyledSkeletonUserLinks>
  );
}

export default SkeletonUserLinks;
