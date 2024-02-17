import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { SiLinktree } from "react-icons/si";

const StyledLogo = styled(Link)`
  font-family: "Outfit", sans-serif;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  color: var(--color-grey-900);

  & span {
    display: flex;
    align-items: center;
    font-size: 20px;
    color: var(--color-green-500);
  }
`;

function Logo() {
  const location = useLocation();

  return (
    <StyledLogo to={location.pathname.includes("admin") ? "/admin" : "/"}>
      Ripple
      <span>
        <SiLinktree />
      </span>
    </StyledLogo>
  );
}

export default Logo;
