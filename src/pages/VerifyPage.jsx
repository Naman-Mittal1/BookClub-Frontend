    import React, { useEffect} from 'react';
    import { useParams } from 'react-router-dom';
    import axios from 'axios';
    const VerifyPage = () => {
    const { token } = useParams();

    useEffect(() => {
        const verifyEmail = async () => {
        try {
            await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify/${token}`);
            // if (response.ok) {
            // // const data = await response.json();
            // // console.log(data);
            // } 
        } catch (error) {
        }
        };

        verifyEmail(); // Run the verification when the component mounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array with an explanation

    // console.clear();


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 text-white py-5 px-1 sm:p-8 sm:rounded-3xl shadow-md text-center">
            <h1 className=" text-xl sm:text-3xl font-semibold text-gray-300 mb-4">Email Verification!</h1>
            <p className={`text-base sm:text-lg text-green-400`}>
            Email verification is completed. You can login now
            </p>
        </div>
        </div>
    );
    }

    export default VerifyPage;