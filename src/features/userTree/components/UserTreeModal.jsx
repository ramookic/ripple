import styled from "styled-components";
import { useParams } from "react-router-dom";
import tinycolor from "tinycolor2";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";

import Modal from "../../../components/modal/Modal";
import UserTreeShareOptions from "./UserTreeShareOptions";
import Button from "../../../components/ui/Button";

import { useUserTree } from "../hooks/useUserTree";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "var(--color-grey-900)"};
  padding: 40px 20px;
  border-radius: 20px;

  & img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: var(--color-grey-900);
    color: var(--color-grey-0);
    font-size: 32px;
    font-weight: 500;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    & h4 {
      font-size: 20px;
      color: ${(props) =>
        tinycolor(props.$backgroundColor).isLight()
          ? "var(--color-grey-900)"
          : "var(--color-grey-0)"};
    }

    & p {
      color: ${(props) =>
        tinycolor(props.$backgroundColor).isLight()
          ? "var(--color-grey-900)"
          : "var(--color-grey-0)"};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

const Footer = styled.div`
  padding-top: 1rem;
  border-top: 1px solid var(--color-grey-100);

  & h4 {
    color: var(--color-grey-900);
    font-size: 16px;
  }

  & p {
    color: var(--color-grey-600);
    font-size: 14px;
    font-weight: 500;
  }

  & div {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
`;

function UserTreeModal() {
  const { username } = useParams();
  const { data, isPending } = useUserTree(username);

  if (isPending) return;

  const { profileImage, username: usernameDb, profileTitle, appearance } = data;

  return (
    <Modal>
      <Modal.Open opens="userTreeModal">
        <button>
          <HiMiniEllipsisHorizontal />
        </button>
      </Modal.Open>

      <Modal.Window name="userTreeModal" title="Share this link">
        <Layout>
          <Banner $backgroundColor={appearance.backgroundColor}>
            {profileImage ? (
              <img src={profileImage} alt={usernameDb} />
            ) : (
              <span>{usernameDb.split("")[0].toUpperCase()}</span>
            )}
            <div>
              <h4>{profileTitle}</h4>
              <p>ripple.com/{usernameDb}</p>
            </div>
          </Banner>
          <UserTreeShareOptions link={usernameDb} />
          <Footer>
            <h4>Create your own Ripple</h4>
            <p>Join the only link in bio trusted by millions.</p>
            <div>
              <Button to="/register">Sign up free</Button>
              <Button className="secondary" to="/login">
                Log in
              </Button>
            </div>
          </Footer>
        </Layout>
      </Modal.Window>
    </Modal>
  );
}

export default UserTreeModal;
