import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";
import Heading from "../../../components/ui/Heading";
import SubHeading from "../../../components/ui/SubHeading";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetSocialIcons } from "../hooks/useGetSocialIcons";
import AdminContainer from "../../dashboard/components/AdminContainer";
import UserCreateSocialIconModal from "./UserCreateSocialIconModal";
import UserSocialIcon from "./UserSocialIcon";

function UserSocialIcons() {
  const { user } = useUser();
  const { socialIcons, isPending } = useGetSocialIcons(user.id);

  if (isPending) return <SkeletonAdminContainer />;

  return (
    <AdminContainer>
      <Heading style={{ fontSize: "16px" }}>Be iconic</Heading>
      <SubHeading>
        Add icons linking to your social profiles, email and more
      </SubHeading>
      <UserCreateSocialIconModal />
      <div>
        {socialIcons.map((icon) => (
          <UserSocialIcon
            social={icon.social}
            link={icon.link}
            display={icon.display}
            id={icon.id}
            key={icon.id}
          />
        ))}
      </div>
    </AdminContainer>
  );
}

export default UserSocialIcons;
