import styled from "styled-components";
import Heading from "../../../components/ui/Heading";
import AdminContainer from "../../dashboard/components/AdminContainer";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetLifetimeAnalytics } from "../hooks/useGetLifetimeAnalytics";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";

const StyledAnalyticsOverview = styled.ul`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  gap: 20px;
  list-style-type: disc;

  & li {
    & p {
      font-size: 14px;
      margin-bottom: 6px;
    }

    & span {
      font-weight: 500;
      font-size: 18px;
      color: var(--color-grey-700);
    }

    &:nth-child(1) {
      color: var(--color-green-500);
    }

    &:nth-child(2) {
      color: var(--color-brand-500);
    }
  }
`;

function AnalyticsOverview() {
  const { user } = useUser();

  const { data, isPending } = useGetLifetimeAnalytics(user.id);

  if (isPending) return <SkeletonAdminContainer />;

  return (
    <AdminContainer>
      <Heading style={{ textAlign: "center" }}>Lifetime Analytics</Heading>
      <StyledAnalyticsOverview>
        <li>
          <p>Views:</p>
          <span>{data.views}</span>
        </li>
        <li>
          <p>Clicks:</p>
          <span>{data.clicks}</span>
        </li>
      </StyledAnalyticsOverview>
    </AdminContainer>
  );
}

export default AnalyticsOverview;
