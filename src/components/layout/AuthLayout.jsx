import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDocumentTitle } from "@uidotdev/usehooks";

import AuthHeading from "../../features/authentication/components/AuthHeading";
import AuthFooter from "../../features/authentication/components/AuthFooter";
import Logo from "../ui/Logo";

const StyledAuthLayout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;

    & header {
      display: flex;
      align-items: flex-start;
      padding: 3rem;
      margin-bottom: 6rem;

      @media screen and (max-width: 768px) {
        padding: 0px;
      }
    }

    & main {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    & footer {
      margin-top: 2rem;
    }
  }

  & img {
    object-fit: cover;
    width: 1300px;

    @media screen and (max-width: 1340px) {
      display: none;
    }
  }
`;

function AuthLayout() {
  const location = useLocation();
  const isOnLoginPage = location.pathname.includes("login");
  useDocumentTitle("Log in or Sign up | Ripple");

  return (
    <StyledAuthLayout>
      <div>
        <header>
          <Logo />
        </header>
        <main>
          <AuthHeading type={isOnLoginPage} />
          <Outlet />
        </main>
        <footer>
          <AuthFooter type={isOnLoginPage} />
        </footer>
      </div>
      <img
        src={`/assets/ripple_${isOnLoginPage ? "login" : "register"}_image.png`}
        alt="Log in or Sign up Banner"
      />
    </StyledAuthLayout>
  );
}

export default AuthLayout;
