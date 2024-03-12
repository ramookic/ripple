import styled from "styled-components";
import AdminContainer from "../../dashboard/components/AdminContainer";
import { useState } from "react";
import AnalyticsNoData from "./AnalyticsNoData";

const StyledAnalyticsTopLocations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  & > :nth-child(1) {
    display: flex;
    justify-content: space-between;

    & p {
      font-size: 14px;
      color: var(--color-grey-400);
      margin-bottom: 10px;
      text-transform: capitalize;
    }
  }

  & .list {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & div {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-grey-200);
      padding-bottom: 10px;
    }

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

  & .navigation {
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
`;

function AnalyticsTopLocations({ viewsAnalytics, clicksAnalytics }) {
  const [currentData, setCurrentData] = useState(
    handleCountriesList(viewsAnalytics)
  );
  const [selected, setSelected] = useState("views");

  if (
    !viewsAnalytics ||
    viewsAnalytics.length === 0 ||
    !clicksAnalytics ||
    clicksAnalytics.length === 0
  )
    return <AnalyticsNoData />;

  function handleCountriesList(data) {
    const countriesMap = {};

    data.forEach((view) => {
      const countryName = view.countryName;
      countriesMap[countryName] = (countriesMap[countryName] || 0) + 1;
    });

    const countriesList = Object.keys(countriesMap).map((countryName) => ({
      name: countryName,
      clicks: countriesMap[countryName],
    }));

    const sortedList = countriesList.sort((a, b) => b.clicks - a.clicks);

    return sortedList.slice(0, 10);
  }

  function handleDataChange(data, str) {
    setSelected(str);
    setCurrentData(handleCountriesList(data));
  }

  return (
    <AdminContainer>
      <StyledAnalyticsTopLocations>
        <div>
          <h4>Locations</h4>
          <p>{selected}</p>
        </div>
        <div className="list">
          {currentData.map((country) =>
            country.clicks === 0 ? (
              ""
            ) : (
              <div key={country.name}>
                <p>{country.name}</p>
                <span>{country.clicks}</span>
              </div>
            )
          )}
        </div>
        <div className="navigation">
          <button
            className={selected === "views" ? "selected" : ""}
            onClick={() => handleDataChange(viewsAnalytics, "views")}
          >
            Views
          </button>
          <span>|</span>
          <button
            className={selected === "clicks" ? "selected" : ""}
            onClick={() => handleDataChange(clicksAnalytics, "clicks")}
          >
            Clicks
          </button>
        </div>
      </StyledAnalyticsTopLocations>
    </AdminContainer>
  );
}

export default AnalyticsTopLocations;
