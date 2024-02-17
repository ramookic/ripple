import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

const Link = styled(LinkRouter)`
  color: var(--color-brand-500);
  text-decoration: underline;
  font-size: 14px;
  font-weight: 500;
`;

export default Link;
