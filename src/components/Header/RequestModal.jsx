import React, {useState} from 'react'
import RequestBookModal from '../shared/modals/RequestBookModal';


const RequestModal = () => {
    const [isRequestModalOpen, setRequestModalOpen] = useState(false);
     const openRequestModal = () => {
        setRequestModalOpen(true);
      };
    
      const closeRequestModal = () => {
        setRequestModalOpen(false);
      };
    



  return (
    <div className="space-x-4">
          <button
            className="bg-gray-800 hover:bg-gray-800 text-white text-sm py-2 px-4 rounded"
            onClick={openRequestModal}
          >
            Request a Book
          </button>
          <RequestBookModal
            isOpen={isRequestModalOpen}
            onRequestClose={closeRequestModal}
          />
        </div>
  )
}

export default RequestModal