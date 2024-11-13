import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToopingOption from "./ToopingOption";
import { useQuery } from "@tanstack/react-query";

type OptionsProps = {
  optionType: "scoops" | "toppings";
};

export const Options = ({ optionType }: OptionsProps) => {
  const { data: items } = useQuery({
    queryKey: [optionType],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3030/${optionType}`);

      return response.json();
    },
  });

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToopingOption;

  const optionItems = items?.map(
    (item: { name: string; imagePath: string }) => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    )
  );

  return <Row>{optionItems}</Row>;
};
