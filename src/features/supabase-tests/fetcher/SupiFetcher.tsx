import { useTodos } from "../hooks/useTodos";

export const SupiFetcher = () => {
  const { data, isLoading } = useTodos();

  if (isLoading) return <div role="progressbar">Loading...</div>;

  return (
    <div className="flex flex-col gap-2 max-w-md p-2">
      <h2>Zadania todos</h2>
      {data?.length === 0 ? (
        <p>Nie masz więcej zadań</p>
      ) : (
        data?.map((todo) => {
          return (
            <div
              className="flex items-center p-6 bg-red-300 text-stone-950 rounded-md"
              key={todo.id}
            >
              Task {todo.name}
            </div>
          );
        })
      )}
    </div>
  );
};
