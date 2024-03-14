import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { GetUserDetails } from './helper';

const RequireAuth = ({ allowedRoles }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await GetUserDetails();
                if (response.status === 200) {
                    const userData = response.data;
                    setUser(userData.user.role);
                    console.log(userData.user.role)
                    // Check if user's role is allowed
                    if (!allowedRoles.includes(userData.user.role)) {
                  
                        // Redirect to unauthorized page if not allowed
                        navigate('/unauthorized');
                    }
                } else {
                    console.log("Failed to fetch user data");
                    setUser(null);
                    navigate('/unauthorized');
                }
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
                navigate('/unauthorized');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

   

    // Render Outlet only if the user's role is allowed
    return user && allowedRoles.includes(user) ? <Outlet /> : null;
};

export default RequireAuth;
