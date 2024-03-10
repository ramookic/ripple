import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";
import DoughnutChart from "./DoughnutChart";
import { useState } from "react";
import AnalyticsNoData from "./AnalyticsNoData";

const StyledAnalyticsTopDevices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > :nth-child(1) {
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

      & li.tablet::marker {
        color: #00d775;
      }

      & li.mobile::marker {
        color: #ffcb03;
      }

      & li.desktop::marker {
        color: #00b6ff;
      }

      & li.other::marker {
        color: #ff7cea;
      }
    }

    & > :nth-child(2) {
      grid-area: 1 / 2 / 2 / 4;
    }
  }

  & > :nth-child(2) {
    display: flex;
    gap: 10px;

    & span {
      color: var(--color-grey-200);
    }

    & button {
      font-size: 14px;
      font-weight: 600;
      color: var(--color-grey-400);

      &.selected {
        color: var(--color-grey-700);
      }
    }
  }

  & > :nth-child(3) {
    border-top: 1px solid var(--color-grey-200);
    padding-top: 20px;

    & p {
      font-size: 14px;
      color: var(--color-grey-400);
    }

    & span {
      font-weight: 600;
      color: var(--color-grey-700);
    }
  }
`;

const devices = [
  { device: "tablet", color: "#00d775" },
  {
    device: "mobile",
    color: "#ffcb03",
  },
  {
    device: "desktop",
    color: "#00b6ff",
  },
  {
    device: "other",
    color: "#ff7cea",
  },
];

function AnalyticsTopDevices({ viewsAnalytics, clicksAnalytics }) {
  const [mode, setMode] = useState("views");

  if (
    !viewsAnalytics ||
    !clicksAnalytics ||
    viewsAnalytics.length === 0 ||
    clicksAnalytics.lenght === 0
  )
    return <AnalyticsNoData />;

  const combinedData = devices.map((device) => ({
    ...device,
    views: viewsAnalytics.filter((view) => view.device === device.device)
      .length,
    clicks: clicksAnalytics.filter((click) => click.device === device.device)
      .length,
  }));

  const sortedData = combinedData.sort((a, b) => b[mode] - a[mode]);

  return (
    <AdminContainer>
      <StyledAnalyticsTopDevices>
        <div>
          <ul>
            {sortedData.map((device) =>
              device[mode] === 0 ? (
                ""
              ) : (
                <li key={device.device} className={device.device.toLowerCase()}>
                  {device.device} <span>{device[mode]}</span>
                </li>
              )
            )}
          </ul>
          <div>
            <DoughnutChart data={sortedData} dataKey={mode} />
          </div>
        </div>
        <div>
          <button
            className={mode === "views" ? "selected" : ""}
            onClick={() => setMode("views")}
          >
            Views
          </button>
          <span>|</span>
          <button
            className={mode === "clicks" ? "selected" : ""}
            onClick={() => setMode("clicks")}
          >
            Clicks
          </button>
        </div>
        <div>
          <p>
            <span>Other: </span>This includes smart TV's smartwatches, gaming
            devices and bots
          </p>
        </div>
      </StyledAnalyticsTopDevices>
    </AdminContainer>
  );
}

export default AnalyticsTopDevices;
