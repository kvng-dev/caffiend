import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const { globalUser, logout } = useAuth();

  function handleCloseModal() {
    setShowModal(false);
  }
  const header = (
    <header>
      <div>
        <h1 className="text-gradient">CAFFIEND</h1>
        <p>For Coffee Insatients</p>
      </div>
      {!globalUser ? (
        <button onClick={() => setShowModal(true)}>
          <p>Sign up free</p>
          <i className="fa-solid fa-mug-hot"></i>
        </button>
      ) : (
        <button onClick={logout}>
          <p>Logout</p>
        </button>
      )}
    </header>
  );
  const footer = (
    <footer className="">
      <p>
        &copy; 2024 <span className="text-gradient">Caffiend</span>. All rights
        reserved.
      </p>

      <p>
        created by <span className="text-gradient">kvng dev</span>{" "}
      </p>

      <p>
        Check project out on Github{" "}
        <a
          style={{ display: "inline" }}
          href="https://github.com/kvng-dev/caffiend"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </p>
    </footer>
  );
  return (
    <>
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}
      {header}
      <main>{children}</main>
      {footer}
    </>
  );
}
