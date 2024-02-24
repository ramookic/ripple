import { Outlet, useLocation } from "react-router-dom";

import AdminHeader from "../../features/dashboard/components/AdminHeader";
import styled from "styled-components";
import PreviewContainer from "../../features/preview/components/PreviewContainer";
import MobilePreviewModal from "../../features/preview/components/MobilePreviewModal";
import { useDocumentTitle } from "@uidotdev/usehooks";

const StyledAdminLayout = styled.div`
  position: relative;
  min-height: 100vh;
  background: var(--color-grey-100);

  & > :nth-child(2) {
    display: flex;
    gap: 1rem;

    & > main {
      padding-top: 8rem;
      padding-bottom: 4rem;
      display: flex;
      justify-content: center;
      width: ${(props) => (props.$hidePreview ? "100%" : "calc(100% - 600px)")};

      @media screen and (max-width: 768px) {
        padding-top: 12rem;
      }

      & > :nth-child(1) {
        width: 640px;
        display: flex;
        flex-direction: column;
      }
    }

    & > :nth-child(2) {
      position: fixed;
      right: 0;
      max-width: 600px;
      width: 100%;
      height: 100vh;
      margin: 0;
      border-left: 1px solid var(--color-grey-200);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media screen and (max-width: 1280px) {
      & > :nth-child(1) {
        justify-content: center;
        align-items: center;
        width: 100%;

        & > :nth-child(1) {
          width: 100%;
          margin: 0 20px;
        }
      }

      & > :nth-child(2) {
        display: none;
      }
    }
  }
`;

function AdminLayout() {
  const location = useLocation();
  const hidePreview =
    location.pathname.includes("analytics") ||
    location.pathname.includes("settings");
  useDocumentTitle("Ripple Admin");

  return (
    <StyledAdminLayout $hidePreview={hidePreview}>
      <AdminHeader />
      <div>
        <main>
          <Outlet />
        </main>
        {!hidePreview ? (
          <aside>
            <PreviewContainer />
          </aside>
        ) : (
          ""
        )}
      </div>
      <MobilePreviewModal />
    </StyledAdminLayout>
  );
}

export default AdminLayout;
