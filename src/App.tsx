import { ReactElement, useState } from "react";
import { Basic } from "./features/basic/Basic";

type Component = {
  id: number;
  component: () => ReactElement;
};

export const App = () => {
  const [components] = useState<Component[]>([
    {
      id: 1,
      component: Basic,
    },
  ]);

  return (
    <div className="flex flex-col gap-4">
      {components.map(({ component: Component, id }) => (
        <Component key={id} />
      ))}
    </div>
  );
};
