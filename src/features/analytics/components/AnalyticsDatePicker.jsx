import styled from "styled-components";

const StyledAnalyticsDatePicker = styled.select`
  font-size: 14px;
  font-weight: 600;
  padding: 10px 14px;
  border: none;
  outline: none;
  border-radius: 10px;
  outline: 1px solid var(--color-grey-200);
  background: var(--color-grey-0);
  cursor: pointer;

  &:hover {
    outline: 2px solid var(--color-grey-200);
  }

  &:focus {
    outline: 2px solid var(--color-grey-700);
    outline-offset: 2px;
  }
`;

function AnalyticsDatePicker({ timeSpan, handleChange }) {
  return (
    <StyledAnalyticsDatePicker value={timeSpan} onChange={handleChange}>
      <option value="today">Today</option>
      <option value="last7days">Last 7 Days</option>
      <option value="lastMonth">Last Month</option>
      <option value="last3Months">Last 3 Months</option>
      <option value="last6Months">Last 6 Months</option>
      <option value="lastYear">Last Year</option>
    </StyledAnalyticsDatePicker>
  );
}

export default AnalyticsDatePicker;
