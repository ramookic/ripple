import styled from "styled-components";
import { SiLinktree } from "react-icons/si";
import { useLocation } from "react-router-dom";

import Logo from "../ui/Logo";
import Button from "../ui/Button";

const StyledNotFoundLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  & footer {
    position: absolute;
    bottom: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function NotFoundLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.includes("admin");

  return (
    <StyledNotFoundLayout>
      <main>
        <SiLinktree size={92} color="var(--color-green-500)" />
        <h3>The page you’re looking for doesn’t exist.</h3>
        {isAdmin && (
          <Button to={isAdmin ? "/admin" : "/"} className="fit-content">
            Go to Links
          </Button>
        )}
      </main>
      <footer>
        <Logo />
      </footer>
    </StyledNotFoundLayout>
  );
}

export default NotFoundLayout;
