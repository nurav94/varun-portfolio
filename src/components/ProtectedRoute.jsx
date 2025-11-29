export default function ProtectedRoute({ children }) {
  const hasAccess = localStorage.getItem("craftAccess");

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return children;
}
