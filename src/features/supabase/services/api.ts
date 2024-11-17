import { supabase } from "../../../lib/supabase";

export const getAllTodos = async () => {
  const { data, error } = await supabase.from("todos").select("*");

  if (error) {
    throw new Error("Problem z pobieraniem todos!");
  }

  return data;
};
