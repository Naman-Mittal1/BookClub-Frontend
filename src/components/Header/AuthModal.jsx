import React, {useState} from 'react'
import LoginModal from "../shared/modals/LoginModal";
import RegisterModal from "../shared/modals/RegisterModal";
import VerifyModal from '../shared/modals/VerifyModal';

const AuthModal = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
    const [isVerifyModalOpen, setVerifyModalOpen] = useState(false);
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

      const openVerifyModal = () => {
        setVerifyModalOpen(true);
      };
    
      const closeVerifyModal = () => {
        setVerifyModalOpen(false);
      };
    

  return (
    <div className="space-x-4">
          <button
            className="hover:bg-blue-800 text-white text-md px-3.5 py-1.5 outline-none rounded-lg  bg-blue-900"
            onClick={openLoginModal}
          >
            Login
          </button>
          <LoginModal
            isOpen={isLoginModalOpen}
            onRequestClose={closeLoginModal}
            onRegisterClick = {openRegisterModal}
          />
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white text-md outline-none px-3.5 py-1.5  rounded-lg"
            onClick={openRegisterModal}
          >
            Signup
          </button>
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
            onLoginClick = {openLoginModal}
            onVerifyClick = {openVerifyModal}
          />

          <VerifyModal
          isOpen={isVerifyModalOpen}
          onRequestClose={closeVerifyModal}
           />
        </div>
  )
}

export default AuthModal