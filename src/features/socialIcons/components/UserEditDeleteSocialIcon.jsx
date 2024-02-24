import styled from "styled-components";
import Input from "../../../components/form/Input";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { useUpdateSocialIcon } from "../hooks/useUpdateSocialIcon";
import SpinnerMini from "../../../components/ui/SpinnerMini";
import { useDeleteSocialIcon } from "../hooks/useDeleteSocialIcon";

const StyledUserEditDeleteSocialIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    & input,
    p {
      margin-bottom: 10px;
    }

    & p {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;

function UserEditDeleteSocialIcon({ social, link, id, onClose }) {
  const [inputIconData, setInputIconData] = useState(link);
  const [showDelete, setShowDelete] = useState(false);
  const { updateSocialIcon, isPending } = useUpdateSocialIcon();
  const { deleteSocialIcon, isPending: isPendingDelete } =
    useDeleteSocialIcon();

  function handleUpdate() {
    updateSocialIcon(
      {
        updateData: { link: inputIconData },
        id,
      },
      {
        onSettled: () => {
          onClose();
        },
      }
    );
  }

  function handleDelete() {
    deleteSocialIcon(id);
  }

  return (
    <StyledUserEditDeleteSocialIcon>
      {!showDelete && (
        <div>
          <Input
            placeholder={
              social === "whatsapp" ? "Enter phone number" : "Enter address"
            }
            value={inputIconData}
            onChange={(e) => setInputIconData(e.target.value)}
          />
          <div>
            <Button className="brand" onClick={handleUpdate}>
              {isPending ? (
                <>
                  Saving <SpinnerMini />
                </>
              ) : (
                "Save"
              )}
            </Button>
            <Button
              className="secondary"
              onClick={() => setShowDelete(!showDelete)}
            >
              Remove icon
            </Button>
          </div>
        </div>
      )}
      {showDelete && (
        <div>
          <p>Do you want to remove this icon?</p>
          <Button className="brand" onClick={handleDelete}>
            {isPendingDelete ? (
              <>
                Removing <SpinnerMini />
              </>
            ) : (
              "Yes, remove"
            )}
          </Button>
          <Button
            className="secondary"
            onClick={() => setShowDelete(!showDelete)}
          >
            Cancel
          </Button>
        </div>
      )}
    </StyledUserEditDeleteSocialIcon>
  );
}

export default UserEditDeleteSocialIcon;
