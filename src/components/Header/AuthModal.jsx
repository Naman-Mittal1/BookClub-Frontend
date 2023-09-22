import React, {useState} from 'react'
import LoginModal from "../shared/modals/LoginModal";
import RegisterModal from "../shared/modals/RegisterModal";

const AuthModal = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
     const openLoginModal = () => {
        setLoginModalOpen(true);
      };
    
      const closeLoginModal = () => {
        setLoginModalOpen(false);
      };
    
      const openRegisterModal = () => {
        setRegisterModalOpen(true);
      };
    
      const closeRegisterModal = () => {
        setRegisterModalOpen(false);
      };



  return (
    <div className="space-x-4">
          <button
            className="hover:bg-blue-800 text-white px-4 py-2 rounded-lg bg-blue-900"
            onClick={openLoginModal}
          >
            Login
          </button>
          <LoginModal
            isOpen={isLoginModalOpen}
            onRequestClose={closeLoginModal}
          />
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
            onClick={openRegisterModal}
          >
            Signup
          </button>
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          />
        </div>
  )
}

export default AuthModal