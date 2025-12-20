"use client"

import { useInventoryForm } from "../hooks/useInventoryForm";
import { useSubmitInventoryItem } from "../hooks/useSubmitInventoryItem";

const AddItem = () => {
    const { form, onFormChange, resetForm } = useInventoryForm();
    const { onSubmitInventory } = useSubmitInventoryItem(form);

    return (
        <div className="w-full max-w-xs bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
    <div className="flex items-center gap-3 mb-4 border-b border-gray-50 pb-3">
        <div className="p-2 bg-indigo-100 rounded-lg">
            <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 4v16m8-8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900">Add Item</h2>
    </div>
    
    <form onSubmit={(e) => onSubmitInventory(e, resetForm)} className="space-y-2.5">
        <input 
            required
            className="w-full bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 rounded-xl px-4 py-2 text-sm transition-all outline-none border"
            placeholder="Item Name"
            value={form.itemName}
            onChange={(e) => onFormChange("itemName")(e.target.value)}
        />
        <input 
            required
            type="number"
            className="w-full bg-gray-50 border-gray-200 focus:bg-white focus:ring-2 focus:ring-indigo-500 rounded-xl px-4 py-2 text-sm transition-all outline-none border"
            placeholder="Price Paid"
            value={form.paidPrice}
            onChange={(e) => onFormChange("paidPrice")(e.target.value)}
        />
        <button 
            type="submit" 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 text-sm rounded-xl transform active:scale-[0.98] transition-all shadow-md shadow-indigo-100 mt-1"
        >
            Add Item
        </button>
    </form>
</div>
    );
};

export default AddItem;