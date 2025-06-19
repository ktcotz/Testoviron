import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToopingOption from "./ToopingOption";
import { useQuery } from "@tanstack/react-query";
import AlertBanner from "./AlertBanner";
import { pricePerItem } from "../context/constants";

import { formatCurrency } from "../context/utilities";

type OptionsProps = {
  optionType: "scoops" | "toppings";
};

export const Options = ({ optionType }: OptionsProps) => {
  const {
    data: items,
    isError,
    error,
  } = useQuery({
    queryKey: [optionType],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3030/${optionType}`);

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    },
  });

  if (isError || error) {
    return <AlertBanner />;
  }

  // TODO: replace `null` with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToopingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items?.map(
    (item: { name: string; imagePath: string }) => (
      <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
      />
    )
  );

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>{title} total: 0</p>
      <Row>{optionItems}</Row>
    </>
  );
};
