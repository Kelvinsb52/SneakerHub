"use client"

import { createInventoryAction } from '@/lib/actions/inventory.server.actions';
import toast from 'react-hot-toast';
import { useUserContext } from "@/src/context/userContext";
import { InventoryForm, PayloadInventory, UserContextType } from '@/types';

export const useSubmitInventoryItem = (form: InventoryForm) => {
    const { user } = useUserContext() as UserContextType;

    const onSubmitInventory = async (event: React.FormEvent, resetForm: () => void) => {
        event.preventDefault();
        try{
            const payload: PayloadInventory = {};
            for (const[key, value] of Object.entries(form)){
                if(value !== ""){
                    payload[key as keyof PayloadInventory] = value;
                }
            }
            await createInventoryAction(user?.$id || "", payload);
            toast.success("Inventory item created");
            resetForm();
        }catch(error){
            console.error(error);
            toast.error("Failed to create inventory item");
        }
    }
    return {
            onSubmitInventory,
        }
}