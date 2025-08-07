"use client"

import { createInventory} from '@/src/app/api/inventory.api';
import toast from 'react-hot-toast';
import { useUserContext } from "@/src/context/userContext";
import { InventoryForm, PayloadInventory, UserContextType } from '@/types';

export const useSubmitInventoryItem = (form: InventoryForm) => {
    const { user } = useUserContext() as UserContextType;

    const onSubmitInventory = async (event: React.FormEvent) => {
        event.preventDefault();
        try{
            const payload: PayloadInventory = {};
            for (const[key, value] of Object.entries(form)){
                if(value !== ""){
                    payload[key as keyof PayloadInventory] = value;
                }
            }
            await createInventory(user?.$id || "", payload);
            toast.success("Inventory item created");
        }catch(error){
            console.error(error);
        }
    }
    return {
            onSubmitInventory,
        }
}