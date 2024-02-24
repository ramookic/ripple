import styled from "styled-components";

import UserLink from "./UserLink";
import SkeletonUserLinks from "../../../components/skeleton/SkeletonUserLinks";

import { useUser } from "../../authentication/hooks/useUser";
import { useGetLinks } from "../hooks/useGetLinks";

const StyledUserLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function UserLinks() {
  const { user } = useUser();
  const { links, isPending } = useGetLinks(user.id);

  if (isPending) return <SkeletonUserLinks />;

  return (
    <StyledUserLinks>
      {links.map((link) => (
        <UserLink
          title={link.title}
          linkTo={link.link}
          display={link.display}
          id={link.id}
          key={link.id}
        />
      ))}
    </StyledUserLinks>
  );
}

export default UserLinks;
