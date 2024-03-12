import styled from "styled-components";
import { HiOutlineShare } from "react-icons/hi2";

import Logo from "../../../components/ui/Logo";
import Button from "../../../components/ui/Button";
import AdminMenu from "./AdminMenu";
import UserMenuDropdown from "../../profile/components/UserMenuDropdown";
import Modal from "../../../components/modal/Modal";
import { SiLinktree } from "react-icons/si";
import { useGetProfile } from "../../profile/hooks/useGetProfile";
import { useUser } from "../../authentication/hooks/useUser";
import { DOMAIN_NAME } from "../../../config";
import { useRef } from "react";

const Layout = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const StyledAdminHeader = styled.header`
  display: flex;
  align-items: center;
  background: var(--color-grey-0);
  padding: 14px 0px 14px 30px;
  border-radius: 50px;
  margin: 10px 20px;

  & > :nth-child(2) {
    margin-left: 20px;
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    position: absolute;
    right: 34px;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    position: relative;
    border-radius: 0px;
    border-bottom: 1px solid var(--color-grey-200);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0px;
    margin: 0px;

    & > :nth-child(1) {
      margin-left: 0;
      padding: 0 20px;
      grid-area: 1 / 1 / 2 / 2;
    }

    & > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 3;
      border-top: 1px solid var(--color-grey-200);
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & > :nth-child(3) {
      right: 10px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: right;
      grid-area: 1 / 2 / 2 / 3;
    }
  }
`;

const ModalShare = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  & p {
    font-size: 14px;
    text-align: center;
    color: var(--color-grey-500);
  }

  & button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 20px;
    border-radius: 10px;
    outline: 1px solid var(--color-grey-200);

    font-size: 15px;
    font-weight: 500;
  }
`;

function AdminHeader() {
  const { user } = useUser();
  const { profile } = useGetProfile(user.id);

  const copyButtonRef = useRef(null);

  function copyLink() {
    navigator.clipboard.writeText(`${DOMAIN_NAME}/${profile.username}`);
    copyButtonRef.current.innerHTML = "Copied!";

    setTimeout(() => {
      copyButtonRef.current.innerHTML = "Copy";
    }, 3000);
  }

  return (
    <Layout>
      <StyledAdminHeader>
        <Logo />
        <AdminMenu />
        <div>
          <Modal>
            <Modal.Open opens="shareModal">
              <Button className="fit-content secondary">
                <HiOutlineShare size={18} /> Share
              </Button>
            </Modal.Open>
            <Modal.Window name="shareModal" title="Share your Ripple">
              <ModalShare>
                <p>Get more visitors by sharing your Ripple</p>

                <button onClick={copyLink}>
                  <SiLinktree color={"var(--color-green-500)"} />
                  {`${DOMAIN_NAME}/${profile.username}`}
                  <span ref={copyButtonRef}>Copy</span>
                </button>
              </ModalShare>
            </Modal.Window>
          </Modal>
          <UserMenuDropdown />
        </div>
      </StyledAdminHeader>
    </Layout>
  );
}

export default AdminHeader;
