import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (!user) return <Navigate to="/" replace />;

  if (adminOnly && user.role !== "admin") return <Navigate to="/dashboard" replace />;

  return children;
}

export default ProtectedRoute;