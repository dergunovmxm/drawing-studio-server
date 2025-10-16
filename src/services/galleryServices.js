import { supabase } from "../db.js";

export const getGallery = async () => {
  const { data, error } = await supabase.from("images").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
