import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";
import AnalyticsNoData from "./AnalyticsNoData";
import DoughnutChart from "./DoughnutChart";

const StyledAnalyticsSocialIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    list-style-type: disc;
    margin-left: 20px;
    grid-area: 1 / 1 / 2 / 2;

    & li {
      text-transform: capitalize;
      font-size: 14px;
      color: var(--color-grey-500);

      & span {
        font-weight: 700;
        color: var(--color-grey-700);
      }
    }

    & li::marker {
      font-size: 16px;
    }

    & li.snapchat::marker {
      color: #ffcb03;
    }

    & li.instagram::marker {
      color: #f97316;
    }

    & li.facebook::marker {
      color: #00b6ff;
    }

    & li.youtube::marker {
      color: #fc3e4b;
    }

    & li.tiktok::marker {
      color: #ff7cea;
    }

    & li.whatsapp::marker {
      color: #00d775;
    }
  }

  & > :nth-child(2) {
    grid-area: 1 / 2 / 2 / 4;
  }
`;

const icons = [
  {
    icon: "snapchat",
    color: "#ffcb03",
  },
  {
    icon: "instagram",
    color: "#f97316",
  },
  {
    icon: "facebook",
    color: "#00b6ff",
  },
  {
    icon: "youtube",
    color: "#fc3e4b",
  },
  {
    icon: "tiktok",
    color: "#ff7cea",
  },
  {
    icon: "whatsapp",
    color: "#00d775",
  },
];

function AnalyticsSocialIcons({ socialIconsAnalytics }) {
  if (!socialIconsAnalytics || socialIconsAnalytics.length === 0)
    return <AnalyticsNoData />;

  const combinedData = icons.map((icon) => ({
    ...icon,
    clicks: socialIconsAnalytics.filter((click) => click.icon === icon.icon)
      .length,
  }));

  const sortedData = combinedData.sort((a, b) => b - a);

  return (
    <AdminContainer>
      <StyledAnalyticsSocialIcons>
        <ul>
          {sortedData.map((icon) =>
            icon.clicks === 0 ? (
              ""
            ) : (
              <li key={icon.icon} className={icon.icon}>
                {icon.icon} <span>{icon.clicks}</span>
              </li>
            )
          )}
        </ul>
        <DoughnutChart data={sortedData} dataKey={"clicks"} />
      </StyledAnalyticsSocialIcons>
    </AdminContainer>
  );
}

export default AnalyticsSocialIcons;
