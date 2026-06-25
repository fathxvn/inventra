import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="p-6">
        {children}
      </main>
    </>
  );
}

export default MainLayout;