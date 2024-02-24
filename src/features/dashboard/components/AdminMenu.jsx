import {
  HiOutlineChartBar,
  HiOutlineCog6Tooth,
  HiOutlineQueueList,
  HiOutlineSwatch,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledAdminMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & a {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-grey-500);
    padding: 10px 14px;
    border-radius: 6px;

    &.active {
      color: var(--color-grey-900);
    }

    &:hover {
      background: var(--color-grey-100);
    }

    & span {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 40px;

    & a {
      flex-direction: column;
      padding: 0;

      &:hover {
        background: none;
      }
    }
  }
`;

function AdminMenu() {
  return (
    <StyledAdminMenu>
      <NavLink to="/admin/links">
        <span>
          <HiOutlineQueueList />
        </span>
        Links
      </NavLink>
      <NavLink to="/admin/appearance">
        <span>
          <HiOutlineSwatch />
        </span>
        Appearance
      </NavLink>
      <NavLink to="/admin/analytics">
        <span>
          <HiOutlineChartBar />
        </span>
        Analytics
      </NavLink>
      <NavLink to="/admin/settings">
        <span>
          <HiOutlineCog6Tooth />
        </span>
        Settings
      </NavLink>
    </StyledAdminMenu>
  );
}

export default AdminMenu;
