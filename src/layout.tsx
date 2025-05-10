import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
import Contact from "./components/Contact";

export default function Layout() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <>
      <Header />

      <div className="min-h-screen">
        <Outlet />
      </div>

      <Footer />

      {/* Floating Message Icon */}
      <div
        onClick={toggleModal}
        className="fixed bottom-5 right-4 cursor-pointer rounded-full p-4 bg-rose-500 hover:bg-rose-600 transition shadow-lg z-50"
      >
        <FaRegMessage color="white" size={20} />
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40">
          <Contact />
        </div>
      )}
    </>
  );
}
