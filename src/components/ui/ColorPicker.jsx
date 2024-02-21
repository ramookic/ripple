import { ChromePicker } from "react-color";

import styled from "styled-components";
import { useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDebouncedCallback } from "use-debounce";
import Input from "../form/Input";

const StyledColorPicker = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & button {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    background: ${(props) => props.$backgroundColor};
    border-radius: 10px;
    outline: 1px solid var(--color-grey-200);
    transition: 0.3s ease;

    &:focus {
      scale: 0.8;
      outline: 3px solid var(--color-grey-800);
      outline-offset: 4px;
    }
  }

  .chrome-picker {
    position: absolute;
    left: 30px;
    top: 30px;
    z-index: 100;
    font-family: "Outfit", sans-serif;
  }
`;

function ColorPicker({ value, onChange, placeholder }) {
  const [isVisible, setIsVisible] = useState(false);
  const chromePickerRef = useOutsideClick(() => setIsVisible(false));

  const handleChange = useDebouncedCallback(function (color) {
    onChange(color.hex);
  }, 300);

  return (
    <StyledColorPicker $backgroundColor={value}>
      <button onClick={() => setIsVisible(!isVisible)}></button>
      {isVisible && (
        <div ref={chromePickerRef}>
          <ChromePicker
            renderers
            color={value}
            onChangeComplete={(color) => handleChange(color)}
          />
        </div>
      )}
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        $fitContent
      />
    </StyledColorPicker>
  );
}

export default ColorPicker;
