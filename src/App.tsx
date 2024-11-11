import { ReactElement, useState } from "react";
import { Basic } from "./features/basic/Basic";
import { BasicMore } from "./features/basic-more/BasicMore";
import { SummaryForm } from "./features/form/SummaryForm";

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
    {
      id: 2,
      component: BasicMore,
    },
    {
      id: 3,
      component: SummaryForm,
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
