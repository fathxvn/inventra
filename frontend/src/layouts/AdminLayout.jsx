import Sidebar from "../components/Sidebar";

function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;