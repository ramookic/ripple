import styled from "styled-components";
import AdminContainer from "./AdminContainer";
import { useUpdateAppearance } from "../hooks/useUpdateAppearance";
import { useUser } from "../../authentication/hooks/useUser";
import { useGetAppearance } from "../hooks/useGetAppearance";
import themes from "../data/themes.json";
import UserTheme from "./UserTheme";
import SkeletonAdminContainer from "../../../components/skeleton/SkeletonAdminContainer";

const StyledUserThemes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
  }
`;

const Container = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  & p {
    font-size: 15px;
    font-weight: 500;
    color: var(--color-grey-600);
  }
`;

function UserThemes() {
  const { user } = useUser();
  const { appearance, isPending } = useGetAppearance(user.id);
  const { updateAppearance } = useUpdateAppearance();

  if (isPending) return <SkeletonAdminContainer />;

  const { id } = appearance;

  function setTheme(data) {
    updateAppearance({
      updateData: { ...data },
      id,
    });
  }

  return (
    <AdminContainer>
      <StyledUserThemes>
        {themes.map((theme) => (
          <Container key={theme.id} onClick={() => setTheme(theme.appearance)}>
            <UserTheme
              className={`${theme.appearance.buttonsRounded} ${theme.appearance.buttonsType} ${theme.appearance.backgroundType}`}
              $background={theme.appearance.backgroundColor}
              $direction={theme.appearance.backgroundDirection}
              $buttonsBackgroundColor={theme.appearance.buttonsBackgroundColor}
            >
              <div></div>
              <div></div>
              <div></div>
            </UserTheme>
            <p>{theme.themeTitle}</p>
          </Container>
        ))}
      </StyledUserThemes>
    </AdminContainer>
  );
}

export default UserThemes;
