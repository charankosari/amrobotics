import React, { useEffect, useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { GetUserDetails } from './helper'; // Assuming you have this function for fetching user details

const RequireAuth = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Fetch user details
        const response = await GetUserDetails();
        if (response.status === 200) {
          const userData = response.data;
          setUser(userData.user.role);
        } else {
          console.log("Failed to fetch user data");
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login'); // Redirect to login page if no user
      }
    }
  }, [loading, user, navigate]);

  return user ? <Outlet /> : null;
};

export default RequireAuth;
