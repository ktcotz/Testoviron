import { useQuery } from "@tanstack/react-query";
import { getAllTodos } from "../services/api";

export const useTodos = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  return { data, isLoading } as const;
};
