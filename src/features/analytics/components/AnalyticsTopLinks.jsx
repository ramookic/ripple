import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";
import AnalyticsNoData from "./AnalyticsNoData";

const StyledAnalyticsTopLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > :nth-child(1) {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    color: var(--color-grey-400);
    margin-bottom: 10px;
  }

  & div {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-grey-200);
    padding-bottom: 10px;

    &:last-child {
      border-bottom: none;
    }

    & p,
    span {
      font-size: 15px;
    }

    & p {
      color: var(--color-grey-500);
    }

    & span {
      font-weight: 600;
    }
  }
`;

function AnalyticsTopLinks({ links, linksAnalytics }) {
  const linksWithClicks = links.map((link) => {
    const clicks = linksAnalytics.filter((el) => el.linkId === link.id).length;
    return { ...link, clicks };
  });

  const sortedLinks = linksWithClicks.sort((a, b) => b.clicks - a.clicks);

  if (!linksAnalytics || linksAnalytics.length === 0)
    return <AnalyticsNoData />;

  return (
    <AdminContainer>
      <StyledAnalyticsTopLinks>
        <p>Clicks</p>
        {sortedLinks.map((link) =>
          link.clicks === 0 ? (
            ""
          ) : (
            <div key={link.id}>
              <p>{link.title}</p>
              <span>{link.clicks}</span>
            </div>
          )
        )}
      </StyledAnalyticsTopLinks>
    </AdminContainer>
  );
}

export default AnalyticsTopLinks;
