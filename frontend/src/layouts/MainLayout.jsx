import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen p-6 bg-gray-100">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;