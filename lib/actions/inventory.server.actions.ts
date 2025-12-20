'use server';

import { ID, Permission, Role } from "node-appwrite";
import { createSessionClient, createAdminClient } from "../appwrite";
import { parseStringify } from "../utils";
import { PayloadInventory } from "@/types";

const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const inventoryCollectionId = process.env.NEXT_PUBLIC_APPWRITE_INVENTORY_COLLECTION_ID;

/**
 * Create a new inventory item for the authenticated user
 * Uses session-based authentication to ensure user ownership
 */
export const createInventoryAction = async (userId: string, payload: PayloadInventory) => {
    try {
        const { databases } = await createSessionClient();
        const ownerRole = Role.user(userId);
        
        const response = await databases.createDocument(
            databaseId!,
            inventoryCollectionId!,
            ID.unique(),
            payload,
            [
                Permission.read(ownerRole),
                Permission.update(ownerRole),
                Permission.delete(ownerRole),
            ]
        );
        
        return parseStringify(response);
    } catch (error) {
        console.error("Error creating inventory:", error);
        throw error;
    }
};

/**
 * Get all inventory items for the authenticated user
 */
export const listInventoryAction = async () => {
    try {
        const { databases } = await createSessionClient();
        
        const response = await databases.listDocuments(
            databaseId!,
            inventoryCollectionId!
        );
        
        return parseStringify(response);
    } catch (error) {
        console.error("Error listing inventory:", error);
        throw error;
    }
};

/**
 * Get a specific inventory item by ID
 */
export const getInventoryAction = async (documentId: string) => {
    try {
        const { databases } = await createSessionClient();
        
        const response = await databases.getDocument(
            databaseId!,
            inventoryCollectionId!,
            documentId
        );
        
        return parseStringify(response);
    } catch (error) {
        console.error("Error getting inventory:", error);
        throw error;
    }
};

/**
 * Update an existing inventory item
 */
export const updateInventoryAction = async (documentId: string, payload: Partial<PayloadInventory>) => {
    try {
        const { databases } = await createSessionClient();
        
        const response = await databases.updateDocument(
            databaseId!,
            inventoryCollectionId!,
            documentId,
            payload
        );
        
        return parseStringify(response);
    } catch (error) {
        console.error("Error updating inventory:", error);
        throw error;
    }
};

/**
 * Delete an inventory item
 */
export const deleteInventoryAction = async (documentId: string) => {
    try {
        const { databases } = await createSessionClient();
        
        await databases.deleteDocument(
            databaseId!,
            inventoryCollectionId!,
            documentId
        );
        
        return { success: true };
    } catch (error) {
        console.error("Error deleting inventory:", error);
        throw error;
    }
};
