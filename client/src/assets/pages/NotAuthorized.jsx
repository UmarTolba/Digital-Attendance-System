export default function NotAuthorized() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
      <p className="text-gray-700">You are not authorized to view this page.</p>
    </div>
  );
}
