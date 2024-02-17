import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser } from "../hooks/useUser";

import BlankPage from "../../../components/ui/BlankPage";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isPending, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate("/login");
    },
    [isAuthenticated, isPending, navigate]
  );

  if (isPending) return <BlankPage />;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
