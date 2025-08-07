"use client"

import { useInventoryForm } from "../hooks/useInventoryForm";
import { useSubmitInventoryItem } from "../hooks/useSubmitInventoryItem";

const AddItem = () => {
    const { form, onFormChange } = useInventoryForm();
    const { onSubmitInventory } = useSubmitInventoryItem(form);

    return (
        <div>
            <form onSubmit={onSubmitInventory}>
                <input 
                required
                value={form.itemName}
                onChange={(e) => onFormChange("itemName")(e.target.value)}
                />
                <input 
                required
                value={form.paidPrice}
                onChange={(e) => onFormChange("paidPrice")(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
        </div>
    )
}

export default AddItem;