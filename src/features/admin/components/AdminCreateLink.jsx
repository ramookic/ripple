import styled from "styled-components";
import toast from "react-hot-toast";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";

import Button from "../../../components/ui/Button";
import SpinnerMini from "../../../components/ui/SpinnerMini";
import Input from "../../../components/form/Input";

import { useUser } from "../../authentication/hooks/useUser";
import { useCreateLink } from "../hooks/useCreateLink";
import { useGetLinks } from "../hooks/useGetLinks";

import { MAX_LINKS } from "../../../config";

const AdminCreateLinkContainer = styled.div`
  background: var(--color-grey-0);
  padding: 30px;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  gap: 20px;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
      font-size: 18px;
      font-weight: 800;
      color: var(--color-grey-900);
    }
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

function AdminCreateLink() {
  const [showContainer, setShowContainer] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const { createLink, isPending } = useCreateLink();
  const { user } = useUser();

  const { links } = useGetLinks(user.id);

  function toggleContainer() {
    setShowContainer(!showContainer);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !link) return;

    if (links.length > MAX_LINKS) {
      toast.error("Maximum number of links reached, upgrade for more.");
      setTitle("");
      setLink("");
      toggleContainer();
      return;
    }

    createLink(
      { title, link, userId: user.id },
      {
        onSettled: () => {
          setTitle("");
          setLink("");
          toggleContainer();
        },
      }
    );
  }

  return (
    <div>
      <Button
        className="brand"
        onClick={toggleContainer}
        hidden={showContainer}
      >
        + Add Link
      </Button>
      <AdminCreateLinkContainer hidden={!showContainer}>
        <div>
          <p>Add Link</p>
          <button onClick={toggleContainer}>
            <HiOutlineXMark />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Title"
            disabled={isPending}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            isUrl
            placeholder="Link"
            disabled={isPending}
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Button className="brand">
            {isPending ? (
              <>
                Adding Link <SpinnerMini />
              </>
            ) : (
              "+ Add Link"
            )}
          </Button>
        </form>
      </AdminCreateLinkContainer>
    </div>
  );
}

export default AdminCreateLink;
