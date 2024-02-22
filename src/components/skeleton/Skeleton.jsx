import styled from "styled-components";

const Skeleton = styled.div`
  background: linear-gradient(
    110deg,
    #ececec 8%,
    var(--color-grey-100) 18%,
    #ececec 33%
  );
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  width: 100%;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export default Skeleton;
