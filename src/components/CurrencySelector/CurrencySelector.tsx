import { Select, Skeleton, Typography } from "antd";
import type { CurrencySelectorProps } from "./CurrencySelector.types";
import { useState } from "react";

const { Text } = Typography;

export const CurrencySelector = ({
   isLoading,
   currency,
   setCurrency,
   options,
}: CurrencySelectorProps) => {
   const [localCur, setLocalCur] = useState(currency);

   const handleChange = (c: string) => {
      setLocalCur(c);
      setCurrency(c);
   };

   if (isLoading) {
      return (
         <div style={{ marginBottom: 16 }}>
            <Text style={{ marginRight: 8 }}>Валюта:</Text>
            <Skeleton.Input size="small" active />
         </div>
      );
   }

   return (
      <div style={{ marginBottom: 16 }}>
         <Text style={{ marginRight: 8 }}>Валюта:</Text>
         <Select
            value={localCur}
            onChange={handleChange}
            style={{ width: 250 }}
            showSearch
         >
            {options.map((option) => (
               <Select.Option key={option.CharCode} value={option.CharCode}>
                  {option.Name}{" "}
                  <Text role="article">
                     (
                     {new Intl.NumberFormat("ru-RU", {
                        style: "currency",
                        currency: "RUB",
                        minimumFractionDigits: 3,
                     }).format(option.Value / option.Nominal)}
                     )
                  </Text>
               </Select.Option>
            ))}
         </Select>
      </div>
   );
};
