import styled from "styled-components";
import Modal from "../../../components/modal/Modal";
import Button from "../../../components/ui/Button";
import { SOCIAL_ICONS } from "../../../config";
import { useUser } from "../../authentication/hooks/useUser";
import { useCreateSocialIcon } from "../hooks/useCreateSocialIcon";
import { useGetSocialIcons } from "../hooks/useGetSocialIcons";
import { FaAngleRight } from "react-icons/fa6";
import React, { useState } from "react";
import Icons from "../../appearance/components/Icons";
import Input from "../../../components/form/Input";
import SpinnerMini from "../../../components/ui/SpinnerMini";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & button {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    gap: 10px;

    &:hover {
      background: var(--color-grey-100);
    }

    & div {
      font-size: 14px;
      font-weight: 700;
      color: var(--color-green-500);
      position: absolute;
      right: 40px;
    }

    & span {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & div {
    display: flex;
    gap: 20px;
  }
`;

function UserCreateSocialIconModal() {
  const { user } = useUser();
  const { socialIcons, isPending } = useGetSocialIcons(user.id);
  const { createIcon, isPending: isPendingCreateIcon } = useCreateSocialIcon();

  const [showBox, setShowBox] = useState(false);
  const [placeholder, setPaceholder] = useState("");
  const [inputIconData, setInputIconData] = useState("");
  const [currentIcon, setCurrentIcon] = useState("");

  if (isPending)
    return <SpinnerMini color="var(--color-green-500)" size={28} />;

  function handleChange(icon) {
    setShowBox(!showBox);
    setCurrentIcon(icon);

    if (icon === "whatsapp") {
      setPaceholder(`Enter ${icon} number`);
    } else {
      setPaceholder(`Enter ${icon} address`);
    }

    setInputIconData("");
  }

  function handleSubmit() {
    if (!inputIconData) return;

    createIcon(
      {
        social: currentIcon,
        link: inputIconData,
        userId: user.id,
      },
      {
        onSettled: () => {
          setInputIconData("");
          setShowBox(!showBox);
        },
      }
    );
  }

  return (
    <Modal>
      <Modal.Open opens="createSocialIconModal">
        <Button className="brand">Add icon</Button>
      </Modal.Open>
      <Modal.Window name="createSocialIconModal" title="Add icon">
        <>
          {!showBox && (
            <Container>
              {SOCIAL_ICONS.map((icon) => {
                const isAlreadyAdded = socialIcons.some(
                  (existingIcon) => existingIcon.social === icon
                );
                return (
                  <button
                    disabled={isAlreadyAdded}
                    key={icon}
                    onClick={() => handleChange(icon)}
                  >
                    <span>{React.createElement(Icons[icon])}</span>
                    {icon}
                    <div>
                      {isAlreadyAdded ? (
                        "Already added"
                      ) : (
                        <FaAngleRight size={14} color="var(--color-grey-700)" />
                      )}
                    </div>
                  </button>
                );
              })}
            </Container>
          )}

          {showBox && (
            <FormBox>
              <Input
                placeholder={placeholder}
                value={inputIconData}
                onChange={(e) => setInputIconData(e.target.value)}
              />
              <div>
                <Button
                  className="secondary"
                  onClick={() => setShowBox(!showBox)}
                >
                  Cancel
                </Button>
                <Button
                  className="brand"
                  onClick={handleSubmit}
                  disabled={!inputIconData}
                >
                  {isPendingCreateIcon ? (
                    <>
                      Adding Icon <SpinnerMini />
                    </>
                  ) : (
                    "Add to Ripple"
                  )}
                </Button>
              </div>
            </FormBox>
          )}
        </>
      </Modal.Window>
    </Modal>
  );
}

export default UserCreateSocialIconModal;
