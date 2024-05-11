import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import { getRequest } from '../services/Requests';
import { baseUrl } from '../constants';

/**
 * Component to handle email verification.
 *
 * This component sends a request to the backend API to verify a user's email
 * based on a unique verification token. It displays a loading indicator during
 * the verification process, and if successful, it navigates to the home page.
 *
 * @component
 * @returns {JSX.Element} The VerifyEmail component that handles email verification
 *                        and displays a loading state while waiting for the response.
 */

const VerifyEmail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const { token } = useParams();

    /**
     * Function to verify the user's email using a unique token.
     *
     * It sends a GET request to the server with the token and handles the response:
     * - If successful (status code 200), the user is redirected to the home page.
     * - If unsuccessful, an error is logged to the console.
     * - Finally, it stops the loading state once the request is complete.
     */
    useEffect(() => {
        const verifyEmail = async () => {
            try {
                const response = await getRequest(`${baseUrl}/user/verify/${token}`, {});
                if (response.status === 200) {
                    navigate('/');
                } else {
                    console.error('Failed to verify email:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error verifying email:', error);
            } finally {
                setIsLoading(false);
            }
        };

        verifyEmail();
    }, [navigate, token]);

    return (
        <div>
            {isLoading ? <Loading /> : (
                <div>
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
