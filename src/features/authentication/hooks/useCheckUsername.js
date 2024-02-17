import { useEffect, useState } from "react";
import apiCheckUsername from "../../../services/authentication/apiCheckUsername";
import { useDebounce } from "@uidotdev/usehooks";

export function useCheckUsername(username) {
  const debouncedUsername = useDebounce(username, 1000);
  const [isTaken, setIsTaken] = useState(false);

  useEffect(() => {
    async function checkUser() {
      if (!username) {
        setIsTaken(false);
        return;
      }

      try {
        const data = await apiCheckUsername(debouncedUsername);
        setIsTaken(!!data);
      } catch (error) {
        setIsTaken(false);
      }
    }

    checkUser();
  }, [debouncedUsername, username]);

  return { isTaken };
}
