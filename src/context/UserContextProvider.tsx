"use client"

import { useEffect, useMemo, useState } from "react";
import { useRouter, usePathname } from 'next/navigation'
import { signUp, signIn, getLoggedInUser, logoutAccount } from "@/lib/actions/user.server.actions";
import { UserActionsContext, UserContext } from "./userContext";
import { signInProps, SignUpParams, User } from "@/types";

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const initUserSession = async () => {
    try {
      const currentSessionUser = await getLoggedInUser();
      console.log("From UserContextProvider" + currentSessionUser);
      setUser(currentSessionUser || null);
    } catch (error) {
      console.log("No user found");
      setUser(null);
    }
    setIsInitialized(true);
  };

  useEffect(() => {
    initUserSession();
  }, []); 


  useEffect(() => {
    if (!isInitialized) return; 

    if (!user && pathname !== "/sign-in") {
      router.push("/sign-in");
    }
    if (user && pathname === "/sign-in") {
      router.push("/");
    }
  }, [isInitialized, user, pathname]);

  const value = useMemo(() => ({ user }), [user]);
  const actions = useMemo(() => ({
  signIn: async (credentials: signInProps) => {
    await signIn(credentials);
    await initUserSession();
  },
  signUp: async (userData: SignUpParams) => {
    await signUp(userData);
    await initUserSession();
  },
  logout: async () => {
    await logoutAccount();
    setUser(null); 
  },
  setUser,
}), []);

  return (
    <UserContext.Provider value={value}>
      <UserActionsContext.Provider value={actions}>
        {isInitialized ? (
          children
        ) : (
          <div className="flex items-center justify-center min-h-screen font-semibold text-indigo-600">
            Loading...
          </div>
        )}
      </UserActionsContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
