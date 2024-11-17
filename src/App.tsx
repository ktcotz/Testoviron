import { ReactElement, useState } from "react";
import { Basic } from "./features/basic/Basic";
import { BasicMore } from "./features/basic-more/BasicMore";
import { SummaryForm } from "./features/form/SummaryForm";
import { AdvancedForm } from "./features/advanced-form/AdvancedForm";
import { CustomHook } from "./features/custom-hook/CustomHook";
import { Zustand } from "./features/zustand/Zustand";
import { Supi } from "./features/supabase/Supi";

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
    {
      id: 4,
      component: AdvancedForm,
    },
    {
      id: 5,
      component: CustomHook,
    },
    {
      id: 6,
      component: Zustand,
    },
    {
      id: 7,
      component: Supi,
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
