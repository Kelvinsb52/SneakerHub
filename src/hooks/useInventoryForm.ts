"use client"

import { useState } from "react";

export const useInventoryForm = () => {
  const [form, setForm] = useState({
    itemName: "",
    paidPrice: "", 
  });
 
  const onFormChange = (key:string) => (value:string) => {
    setForm(state => ({
      ...state,
      [key]: value,
    }));
  };
 
  return {
    form,
    onFormChange,
  };
};