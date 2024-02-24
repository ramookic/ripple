import styled from "styled-components";
import { HiOutlineShare } from "react-icons/hi2";

import Logo from "../../../components/ui/Logo";
import Button from "../../../components/ui/Button";
import AdminMenu from "./AdminMenu";
import UserMenu from "../../profile/components/UserMenuButton";

const Layout = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const StyledAdminHeader = styled.header`
  display: flex;
  align-items: center;
  background: var(--color-grey-0);
  padding: 14px 0px 14px 30px;
  border-radius: 50px;
  margin: 10px 20px;

  & > :nth-child(2) {
    margin-left: 20px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    position: absolute;
    right: 34px;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    border-radius: 0px;
    border-bottom: 1px solid var(--color-grey-200);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0px;
    margin: 0px;

    & > :nth-child(1) {
      margin-left: 0;
      padding: 0 20px;
      grid-area: 1 / 1 / 2 / 2;
    }

    & > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 3;
      border-top: 1px solid var(--color-grey-200);
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > :nth-child(3) {
      right: 10px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: right;
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;

function AdminHeader() {
  return (
    <Layout>
      <StyledAdminHeader>
        <Logo />
        <AdminMenu />
        <div>
          <Button className="fit-content secondary">
            <HiOutlineShare size={18} /> Share
          </Button>
          <UserMenu />
        </div>
      </StyledAdminHeader>
    </Layout>
  );
}

export default AdminHeader;
