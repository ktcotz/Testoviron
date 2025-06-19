import { useState } from "react";
import { useBoundStore } from "./store/useBoundStore";
import { useShallow } from "zustand/react/shallow";

export const Zustand = () => {
  const { name, updateName } = useBoundStore(
    useShallow((state) => ({ name: state.name, updateName: state.updateName }))
  );
  const [newName, setNewName] = useState(name);

  const updateNameInput = (name: string) => {
    setNewName(name);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => updateNameInput(e.target.value)}
      />
      <h1>Hi, {name}</h1>

      <button onClick={() => updateName(newName)}>Zmień imię</button>
    </div>
  );
};
