import { UserActionsContextType, UserContextType } from "@/types";
import { createContext, useContext } from "react";

export const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserActionsContext = createContext<UserActionsContextType | null>(null);

export const useUserContext = () => useContext(UserContext);
export const useUserActionsContext = () => useContext(UserActionsContext);