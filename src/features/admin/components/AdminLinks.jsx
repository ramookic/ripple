import styled from "styled-components";

import AdminLink from "./AdminLink";

import { useUser } from "../../authentication/hooks/useUser";
import { useGetLinks } from "../hooks/useGetLinks";

const StyledAdminLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function AdminLinks() {
  const { user } = useUser();
  const { links, isPending } = useGetLinks(user.id);

  if (isPending) return <p>Loading...</p>;

  return (
    <StyledAdminLinks>
      {links.map((link) => (
        <AdminLink
          title={link.title}
          linkTo={link.link}
          display={link.display}
          id={link.id}
          key={link.id}
        />
      ))}
    </StyledAdminLinks>
  );
}

export default AdminLinks;
