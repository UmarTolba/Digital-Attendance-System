import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function AdminProtected({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (user.name !== "admin") {
    return <Navigate to="/not-authorized" />;
  }

  return children;
}
