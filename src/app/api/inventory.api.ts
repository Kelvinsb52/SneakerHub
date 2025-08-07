import { ID, Permission, Role} from "node-appwrite";
import { databases, databaseId, inventoryCollectionId} from "@/lib/utils";
import { PayloadInventory } from "@/types";

export const listInventory = () => {
    return databases.listDocuments(databaseId!, inventoryCollectionId!);
}

export const getInventory = (documentId) => {
    return databases.getDocument(databaseId!, inventoryCollectionId!, documentId)
}

export const createInventory = (userId: string, payload: PayloadInventory) => {
    console.log(userId)
    const ownerRole = Role.user(userId);
    return databases.createDocument(
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
};

export const updateInventory = (documentId, payload) => {
    return databases.updateDocument(
        databaseId!,
        inventoryCollectionId!,
        documentId,
        payload
    );
};

export const deleteInventory = (documentId) =>{
    return databases.deleteDocument(databaseId!, inventoryCollectionId!, documentId)
}