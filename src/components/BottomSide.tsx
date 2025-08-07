'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { useUserActionsContext } from '@/src/context/userContext'; // adjust path as needed

const BottomSide = () => {
  const router = useRouter();
  const { logout } = useUserActionsContext()!; 

  const handleLogOut = async () => {
    try {
      await logout(); 
      console.log("Logging out...");
      router.push('/sign-in');
    } catch (error) {
      console.log("Logout failed", error);
    }
  };

  return (
    <footer className="flex">
      <ul className="footer">
        <li>Settings</li>
        <li onClick={handleLogOut} className="cursor-pointer">Logout</li>
      </ul>
    </footer>
  );
};

export default BottomSide;
