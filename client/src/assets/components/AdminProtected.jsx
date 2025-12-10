import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  if (user.role !== "admin") {
    return <Navigate to="/not-authorized" />;
  }

  return children;
}
